import { resolveDSNS } from "./dsns";

export class AccessPoint {

    public constructor(
        public readonly applicationUrl: string,
        public readonly contract: string,
        public readonly dsns?: string,
    ) {}

    public toString() {
        if(this.applicationUrl.endsWith('/')) {
            return `${this.applicationUrl}${this.contract}`;
        } else {
            return `${this.applicationUrl}/${this.contract}`;
        }
    }

    /** 解析 dsns，如果為 http 開頭，則不會呼叫 dsns server，而是直接建立 AccessPoint 物件。 */
    public static async resolve(dsns: string, contract: string, timeoutMs: number = 5000) {
        if(dsns.startsWith('http')) {
            return new AccessPoint(dsns, contract);
        } else {
            const url = await resolveDSNS(dsns, timeoutMs);
            return new AccessPoint(url!, contract, dsns);
        }
    }

    /** 解析 url 分離 dsns 與 contract。 */
    public static parse(url: string) {
        const fragments =  url.split('/');

        let contract;

        // 去除一些空白的陣列元件。
        while(!(contract = fragments.pop()) && fragments.length > 0) { }

        return new AccessPoint(fragments.join('/'), contract!);
    }
}
