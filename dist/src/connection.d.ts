import { SecurityToken } from './envelope';
import { AccessPoint } from './access_point';
import { XElement } from './xelement';
export declare const ConnectService = "DS.Base.Connect";
export declare class Connection {
    readonly accessPoint: AccessPoint;
    private readonly securityToken;
    private session;
    private version;
    private create_at;
    constructor(accessPoint: AccessPoint, securityToken: SecurityToken);
    get createAt(): Date;
    connect(): Promise<Connection>;
    getSession(): SecurityToken;
    /** 取得 DSA 的核心版本。 */
    getVersion(): string;
    /** 是否使用 session 機制。 */
    useSession: boolean;
    /**
     *
     * @param service 服務名稱。
     * @param body Xml 字串、Json 物件或是 Jsonx 物件。
     * @returns
     */
    send(service: string, body?: string | XElement | any): Promise<XElement>;
}
