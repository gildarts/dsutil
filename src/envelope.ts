import type { ElementCompact } from 'xml-js';
import { toJson } from './converter';
import { XElement } from './xelement';

const RootName = "Envelope";
const HeaderName = 'Header';
const BodyName = 'Body';

export class Envelope {

    private envelope: XElement;

    private m_header: XElement;

    private m_security_token!: SecurityToken;

    constructor(xml: string = `<${RootName}/>`) {

        const root = new XElement(xml);
        if (!root.exists(RootName)) {
            throw new Error('根必須是 Envelop。')
        }

        this.envelope = root.child(RootName)
        this.m_header = this.envelope.child(HeaderName);
    }

    public get targetContract() {
        return this.m_header.child('TargetContract').text;
    }

    public set targetContract(val: string) {
        this.m_header.child('TargetContract').text = val;
    }

    public get targetService() {
        return this.m_header.child('TargetService').text;
    }

    public set targetService(val: string) {
        this.m_header.child('TargetService').text = val;
    }

    public get code() {
        const pos = ['Status', 'Code'];

        if(this.m_header.exists(...pos)) {
            return this.m_header.child(...pos).text;
        }

        return '';
    }

    public get message() {
        const pos = ['Status', 'Message'];

        if(this.m_header.exists(...pos)) {
            return this.m_header.child(...pos).text;
        }

        return '';
    }

    public get credential() {
        return this.m_security_token;
    }

    public set credential(val: SecurityToken) {
        this.m_security_token = val;
    }

    public header(...name: string[]) {
        return this.m_header.child(...name);
    }

    public getBody() {
        return this.envelope.child(BodyName);
    }

    public setBody(content: string | XElement | any) {
        this.envelope.raw(BodyName, content);
    }

    public toString() {
        if(this.credential) {
            this.m_header.raw(SecurityToken.Name, this.credential.data);
        }

        return this.envelope.toXmlString(RootName);
    }
}

export class SecurityToken {

    public static readonly Name = 'SecurityToken';

    public data: XElement;

    constructor(secrets: ElementCompact | XElement = new XElement()) {

        if (!(secrets instanceof XElement)) {
            this.data = new XElement(secrets);
        } else {
            this.data = secrets;
        }
    }

    public get type() {
        return this.data.getAttr('Type');
    }
}

export class PublicSecurityToken extends SecurityToken {

    constructor() {
        super();

        this.data.setAttr('Type', 'Public');
    }
}

export class SessionSecurityToken extends SecurityToken {

    constructor(secrets: { SessionID: string }) {
        super({ SessionID: { _text: secrets.SessionID } });

        this.data.setAttr('Type', 'Session');
    }

    public get sessionId() {
        return this.data.child('SessionID').text;
    }

    public set sessionId(val: string) {
        this.data.child('SessionID').text = val;
    }
}

export class BasicSecurityToken extends SecurityToken {

    constructor(secrets: { UserName: string, Password: string }) {
        super({
            UserName: { _text: secrets.UserName },
            Password: { _text: secrets.Password }
        });
        this.data.setAttr('Type', 'Basic');
    }

    public get userName() {
        return this.data.child('UserName').text;
    }

    public set userName(val: string) {
        this.data.child('UserName').text = val;
    }

    public get password() {
        return this.data.child('Password').text;
    }

    public set password(val: string) {
        this.data.child('Password').text = val;
    }
}

export class PassportSecurityToken extends SecurityToken{

    constructor(passportXml: string) {
        super(toJson(passportXml));
        this.data.setAttr('Type', 'Passport');
    }
}

export class PassportAccessToken extends SecurityToken {
    constructor(secrets: { AccessToken: string }) {
        super({ AccessToken: { _text: secrets.AccessToken } });

        this.data.setAttr('Type', 'PassportAccessToken');
    }

    public get accessToken() {
        return this.data.child('AccessToken').text;
    }

    public set accessToken(val: string) {
        this.data.child('AccessToken').text = val;
    }
}
