export declare class HttpClient {
    static post(url: string, body?: string, options?: {
        followRedirect: boolean;
    }): Promise<{
        body: string;
    }>;
    static get(url: string, options?: {
        followRedirect: boolean;
    }): Promise<{
        body: string;
        header: import("node:http").IncomingHttpHeaders;
    }>;
}
