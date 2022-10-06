export declare class DSAHttpClient {
    /** TODO: 需要優化可靠度。 */
    static post(url: string, xmlString?: string): Promise<{
        body: string;
    } | {
        body: {};
    }>;
    static get(url: string): Promise<{
        body: string;
    }>;
}
