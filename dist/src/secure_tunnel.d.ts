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
/**
 * 安全通道 - 處理單次請求的加解密
 */
export declare class SecureTunnel {
    private secretKeyString;
    private aesKey;
    private serverPublicKey;
    private clientPublicKeyXml;
    constructor(serverPublicKey: crypto.KeyObject);
    /**
     * 加密 Envelope
     * @param envelope 原始 Envelope XML 字串
     * @param targetContract 目標 Contract（會保留在外層）
     * @returns 加密後的 Envelope XML 字串
     */
    protect(envelope: string, targetContract: string): string;
    /**
     * 解密 Envelope
     * @param encryptedEnvelope 加密的 Envelope XML 字串
     * @returns 解密後的 Envelope XML 字串
     */
    unprotect(encryptedEnvelope: string): string;
}
/**
 * 安全通道服務 - 管理與特定 Contract 的加密通道
 */
export declare class SecureTunnelService {
    private serverPublicKey;
    private accessPointUrl;
    private targetContract;
    /**
     * 初始化安全通道服務
     * @param accessPointUrl DSA 存取點 URL
     * @param targetContract 目標 Contract
     * @param timeout 超時時間（毫秒）
     */
    init(accessPointUrl: string, targetContract: string, timeout?: number): Promise<void>;
    /**
     * 建立新的安全通道
     */
    newTunnel(): SecureTunnel;
    /**
     * 取得目標 Contract
     */
    getTargetContract(): string;
}
