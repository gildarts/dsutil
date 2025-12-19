/**
 * DSA Secure Tunnel - RSA 混合加密通道
 *
 * 移植自 C# FISCA.DSAClient.SecureTunnel
 *
 * 加密流程：
 * 1. 產生隨機 SecretKey (GUID)
 * 2. 用 MD5 將 GUID 轉成 16 bytes 作為 AES Key
 * 3. 用 Server 公鑰 RSA 加密 SecretKey
 * 4. 用 AES 加密原始 Envelope
 * 5. 組合成 CryptoToken 格式發送
 *
 * 解密流程：
 * 1. 從回應取出 CryptoToken/Cipher
 * 2. 用同一個 AES Key 解密
 */

import crypto from "crypto";
import { DSAHttpClient } from "./dsa_http_client.ts";

// === 工具函數 ===

/**
 * 從 XML 格式的 RSA 公鑰提取 Modulus 和 Exponent
 */
function parseRsaXmlKey(xml: string): { modulus: Buffer; exponent: Buffer } {
  const modulusMatch: any = xml.match(/<Modulus>([^<]+)<\/Modulus>/);
  const exponentMatch: any = xml.match(/<Exponent>([^<]+)<\/Exponent>/);

  if (!modulusMatch || !exponentMatch) {
    throw new Error("無法解析 RSA XML 公鑰");
  }

  return {
    modulus: Buffer.from(modulusMatch[1], "base64"),
    exponent: Buffer.from(exponentMatch[1], "base64"),
  };
}

/**
 * 將 RSA XML 公鑰轉成 Node.js crypto 可用的 KeyObject
 */
function xmlKeyToPublicKey(xml: string): crypto.KeyObject {
  const { modulus, exponent } = parseRsaXmlKey(xml);

  // 轉成 JWK 格式
  const jwk = {
    kty: "RSA",
    n: modulus.toString("base64url"),
    e: exponent.toString("base64url"),
  };

  return crypto.createPublicKey({ key: jwk, format: "jwk" });
}

/**
 * 將密碼字串用 MD5 轉成 16 bytes 的 AES Key
 */
function md5Password(password: string): Buffer {
  return crypto.createHash("md5").update(password, "utf8").digest();
}

/**
 * AES-128-ECB 加密（PKCS7 padding）
 */
function aesEncrypt(plaintext: string, key: Buffer): string {
  const cipher = crypto.createCipheriv("aes-128-ecb", key, null);
  cipher.setAutoPadding(true);
  const encrypted = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  return encrypted.toString("base64");
}

/**
 * AES-128-ECB 解密（PKCS7 padding）
 */
function aesDecrypt(ciphertext: string, key: Buffer): string {
  const decipher = crypto.createDecipheriv("aes-128-ecb", key, null);
  decipher.setAutoPadding(true);
  const decrypted = Buffer.concat([decipher.update(ciphertext, "base64"), decipher.final()]);
  return decrypted.toString("utf8");
}

/**
 * 用 Server 公鑰 RSA 加密
 */
function rsaEncrypt(plaintext: string, publicKey: crypto.KeyObject): string {
  const encrypted = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_PADDING,
    },
    Buffer.from(plaintext, "utf8")
  );
  return encrypted.toString("base64");
}

/**
 * 產生 Client 的 RSA KeyPair
 */
function generateClientKeyPair(): { privateKey: crypto.KeyObject; publicKeyXml: string } {
  const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 1024,
  });

  // 將公鑰轉成 C# 的 XML 格式
  const jwk = publicKey.export({ format: "jwk" }) as { n: string; e: string };
  const modulus = Buffer.from(jwk.n, "base64url").toString("base64");
  const exponent = Buffer.from(jwk.e, "base64url").toString("base64");
  const publicKeyXml = `<RSAKeyValue><Modulus>${modulus}</Modulus><Exponent>${exponent}</Exponent></RSAKeyValue>`;

  return { privateKey, publicKeyXml };
}

// === SecureTunnel 類別 ===

/**
 * 安全通道 - 處理單次請求的加解密
 */
export class SecureTunnel {
  private secretKeyString: string;
  private aesKey: Buffer;
  private serverPublicKey: crypto.KeyObject;
  private clientPublicKeyXml: string;

  constructor(serverPublicKey: crypto.KeyObject) {
    this.serverPublicKey = serverPublicKey;
    this.secretKeyString = crypto.randomUUID();
    this.aesKey = md5Password(this.secretKeyString);

    const { publicKeyXml } = generateClientKeyPair();
    this.clientPublicKeyXml = publicKeyXml;
  }

  /**
   * 加密 Envelope
   * @param envelope 原始 Envelope XML 字串
   * @param targetContract 目標 Contract（會保留在外層）
   * @returns 加密後的 Envelope XML 字串
   */
  protect(envelope: string, targetContract: string): string {
    // RSA 加密 SecretKey
    const cipherSecretKey = rsaEncrypt(this.secretKeyString, this.serverPublicKey);

    // AES 加密 Client PublicKey
    const cipherPublicKey = aesEncrypt(this.clientPublicKeyXml, this.aesKey);

    // AES 加密原始 Envelope
    const cipherContent = aesEncrypt(envelope, this.aesKey);

    // 組合加密後的 Envelope
    return `<?xml version="1.0" encoding="utf-8"?>
<Envelope>
<Header>
<TargetContract>${targetContract}</TargetContract>
<CryptoToken Type="Static">
<SecretKey>${cipherSecretKey}</SecretKey>
<PublicKey>${cipherPublicKey}</PublicKey>
<Cipher>${cipherContent}</Cipher>
</CryptoToken>
</Header>
<Body/>
</Envelope>`;
  }

  /**
   * 解密 Envelope
   * @param encryptedEnvelope 加密的 Envelope XML 字串
   * @returns 解密後的 Envelope XML 字串
   */
  unprotect(encryptedEnvelope: string): string {
    const cipherMatch: any = encryptedEnvelope.match(/<Cipher>([^<]+)<\/Cipher>/);
    if (!cipherMatch) {
      // 沒有 CryptoToken，可能是明文錯誤回應，直接返回
      return encryptedEnvelope;
    }

    return aesDecrypt(cipherMatch[1], this.aesKey);
  }
}

// === SecureTunnelService 類別 ===

/**
 * 安全通道服務 - 管理與特定 Contract 的加密通道
 */
export class SecureTunnelService {
  private serverPublicKey: crypto.KeyObject | null = null;
  private accessPointUrl: string = "";
  private targetContract: string = "";

  /**
   * 初始化安全通道服務
   * @param accessPointUrl DSA 存取點 URL
   * @param targetContract 目標 Contract
   * @param timeout 超時時間（毫秒）
   */
  async init(accessPointUrl: string, targetContract: string, timeout: number = 5000): Promise<void> {
    this.accessPointUrl = accessPointUrl;
    this.targetContract = targetContract;

    // 呼叫 Public.GetPublicKey 取得 Server 公鑰
    const requestBody = `<?xml version="1.0" encoding="utf-8"?>
<Envelope>
<Header>
<TargetContract>info</TargetContract>
<TargetService>Public.GetPublicKey</TargetService>
</Header>
<Body>
<Content>
<Contract>${targetContract}</Contract>
<Format>pkcs8</Format>
</Content>
</Body>
</Envelope>`;

    const response = await DSAHttpClient.post(accessPointUrl, requestBody, timeout);

    if (!response?.body) {
      throw new Error("取得 Server 公鑰失敗：無回應");
    }

    // 檢查是否是錯誤回應
    if (response.body.includes("<Status>") || response.body.includes("<Code>")) {
      throw new Error(`取得 Server 公鑰失敗：${response.body}`);
    }

    // 解析公鑰
    this.serverPublicKey = xmlKeyToPublicKey(response.body);
  }

  /**
   * 建立新的安全通道
   */
  newTunnel(): SecureTunnel {
    if (!this.serverPublicKey) {
      throw new Error("SecureTunnelService 尚未初始化，請先呼叫 init()");
    }
    return new SecureTunnel(this.serverPublicKey);
  }

  /**
   * 取得目標 Contract
   */
  getTargetContract(): string {
    return this.targetContract;
  }
}
