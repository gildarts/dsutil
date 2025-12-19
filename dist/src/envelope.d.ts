import type { ElementCompact } from 'xml-js';
import { XElement } from './xelement';
export declare class Envelope {
    private envelope;
    private m_header;
    private m_security_token;
    constructor(xml?: string);
    get targetContract(): string;
    set targetContract(val: string);
    get targetService(): string;
    set targetService(val: string);
    get code(): string;
    get message(): string;
    get credential(): SecurityToken;
    set credential(val: SecurityToken);
    header(...name: string[]): XElement;
    getBody(): XElement;
    setBody(content: string | XElement | any): void;
    toString(): string;
}
export declare class SecurityToken {
    static readonly Name = "SecurityToken";
    data: XElement;
    constructor(secrets?: ElementCompact | XElement);
    get type(): string;
}
export declare class PublicSecurityToken extends SecurityToken {
    constructor();
}
export declare class SessionSecurityToken extends SecurityToken {
    constructor(secrets: {
        SessionID: string;
    });
    get sessionId(): string;
    set sessionId(val: string);
}
export declare class BasicSecurityToken extends SecurityToken {
    constructor(secrets: {
        UserName: string;
        Password: string;
    });
    get userName(): string;
    set userName(val: string);
    get password(): string;
    set password(val: string);
}
export declare class PassportSecurityToken extends SecurityToken {
    constructor(passportXml: string);
}
export declare class PassportAccessToken extends SecurityToken {
    constructor(secrets: {
        AccessToken: string;
    });
    get accessToken(): string;
    set accessToken(val: string);
}
