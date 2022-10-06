export declare class AccessPoint {
    readonly applicationUrl: string;
    readonly contract: string;
    readonly dsns?: string;
    constructor(applicationUrl: string, contract: string, dsns?: string);
    toString(): string;
    /** 解析 dsns，如果為 http 開頭，則不會呼叫 dsns server，而是直接建立 AccessPoint 物件。 */
    static resolve(dsns: string, contract: string): Promise<AccessPoint>;
    /** 解析 url 分離 dsns 與 contract。 */
    static parse(url: string): AccessPoint;
}
