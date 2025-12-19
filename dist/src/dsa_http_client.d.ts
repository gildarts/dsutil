export declare class DSAHttpClient {
    static post(url: string, xmlString?: string, timeoutMs?: number): Promise<{
        body: string;
    }>;
    static get(url: string, timeoutMs?: number): Promise<{
        body: string;
    }>;
}
