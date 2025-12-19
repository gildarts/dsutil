import type { SecurityToken } from './envelope';
import type { AccessPoint } from './access_point';
import type { XElement } from './xelement';
export declare const ConnectService = "DS.Base.Connect";
export declare class Connection {
    readonly accessPoint: AccessPoint;
    private readonly securityToken;
    private session;
    private version;
    private create_at;
    /** 安全通道服務（用於加密通訊） */
    private secureTunnelService;
    constructor(accessPoint: AccessPoint, securityToken: SecurityToken);
    get createAt(): Date;
    connect(): Promise<Connection>;
    /**
     * 發送原始請求（處理加密/解密）
     */
    private sendRaw;
    getSession(): SecurityToken;
    /** 取得 DSA 的核心版本。 */
    getVersion(): string;
    /** 是否使用 session 機制。 */
    useSession: boolean;
    /** 請求超時設定（毫秒）。 */
    timeout: number;
    /** 是否啟用安全通道（RSA 混合加密）。 */
    enableSecureTunnel: boolean;
    /**
     *
     * @param service 服務名稱。
     * @param body Xml 字串、Json 物件或是 Jsonx 物件。
     * @returns
     */
    send(service: string, body?: string | XElement | any): Promise<any>;
}
