import { Envelope, SessionSecurityToken } from './envelope';
import type { SecurityToken } from './envelope';
import type { AccessPoint } from './access_point';
import { DSAHttpClient } from './dsa_http_client';
import type { XElement } from './xelement';
import { DSAError } from './errors';
import { SecureTunnelService, SecureTunnel } from './secure_tunnel';

export const ConnectService = 'DS.Base.Connect';

export class Connection {

    private session!: SecurityToken;

    private version!: string;

    private create_at: Date;

    /** 安全通道服務（用於加密通訊） */
    private secureTunnelService: SecureTunnelService | null = null;

    constructor(
        public readonly accessPoint: AccessPoint,
        private readonly securityToken: SecurityToken
    ) {
        this.create_at = new Date();
    }

    public get createAt() { return this.create_at; }

    public async connect(): Promise<Connection> {

        if(this.securityToken instanceof SessionSecurityToken) {
            this.session = this.securityToken;
            return this;
        }

        if(!this.useSession) return this;

        const { applicationUrl, contract } = this.accessPoint;

        // 如果啟用安全通道，先初始化
        if (this.enableSecureTunnel) {
            this.secureTunnelService = new SecureTunnelService();
            await this.secureTunnelService.init(applicationUrl, contract, this.timeout);
        }

        const envelope = new Envelope();
        envelope.targetContract = contract;
        envelope.targetService = ConnectService;
        envelope.credential = this.securityToken;
        envelope.setBody('<RequestSessionID />');

        // 發送請求（可能經過加密）
        const rsp = await this.sendRaw(applicationUrl, contract, envelope.toString());

        let rspenv;
        try {
            rspenv = new Envelope(rsp);
        } catch (err: any) {
            // 如果是 XML 解析錯誤，把原始回應內容包進錯誤訊息
            if (err.message?.includes("Unexpected") || err.message?.includes("sax")) {
                const preview = rsp?.substring(0, 1000) || "(empty)";
                throw new Error(`XML 解析失敗，可能回傳了非 XML 內容:\n${preview}`);
            }
            throw err;
        }

        if(rspenv.code !== '0') {
            throw new DSAError(rspenv.message, rspenv.code);
        }

        const rspbody = rspenv.getBody();
        const sessionId = rspbody.child('SessionID').text

        if(!sessionId) {
            throw new Error('Session Not Supported.');
        }

        this.session = new SessionSecurityToken({ SessionID: sessionId });
        this.version = rspenv.header('Version').text;

        return this;
    }

    /**
     * 發送原始請求（處理加密/解密）
     */
    private async sendRaw(url: string, contract: string, envelopeXml: string): Promise<string> {
        let requestBody = envelopeXml;
        let tunnel: SecureTunnel | null = null;

        // 如果啟用安全通道，加密請求
        if (this.enableSecureTunnel && this.secureTunnelService) {
            tunnel = this.secureTunnelService.newTunnel();
            requestBody = tunnel.protect(envelopeXml, contract);
        }

        const rsp = await DSAHttpClient.post(url, requestBody, this.timeout);

        if (!rsp?.body) {
            throw new Error('伺服器無回應');
        }

        // 如果有使用加密，解密回應
        if (tunnel) {
            return tunnel.unprotect(rsp.body);
        }

        return rsp.body;
    }

    public getSession() {
        return this.session;
    }

    /** 取得 DSA 的核心版本。 */
    public getVersion() {
        return this.version;
    }

    /** 是否使用 session 機制。 */
    public useSession: boolean = true;

    /** 請求超時設定（毫秒）。 */
    public timeout: number = 5000;

    /** 是否啟用安全通道（RSA 混合加密）。 */
    public enableSecureTunnel: boolean = true;

    /**
     *
     * @param service 服務名稱。
     * @param body Xml 字串、Json 物件或是 Jsonx 物件。
     * @returns
     */
    public async send(service: string, body?: string | XElement | any) {
        const { applicationUrl, contract } = this.accessPoint;

        const envelope = new Envelope();
        envelope.targetContract = contract;
        envelope.targetService = service;

        if(this.useSession) {
            envelope.credential = this.session;
        } else {
            envelope.credential = this.securityToken;
        }

        envelope.setBody(body);

        // 發送請求（可能經過加密）
        const rsp = await this.sendRaw(applicationUrl, contract, envelope.toString());

        let rspenv;
        try {
            rspenv = new Envelope(rsp);
        } catch (err: any) {
            // 如果是 XML 解析錯誤，把原始回應內容包進錯誤訊息
            if (err.message?.includes("Unexpected") || err.message?.includes("sax")) {
                const preview = rsp?.substring(0, 1000) || "(empty)";
                throw new Error(`XML 解析失敗，可能回傳了非 XML 內容:\n${preview}`);
            }
            throw err;
        }

        if(rspenv.code !== '0') {
            throw new DSAError(rspenv.message, rspenv.code, rspenv.getBody().toXmlString());
        }

        return rspenv.getBody();
    }
}
