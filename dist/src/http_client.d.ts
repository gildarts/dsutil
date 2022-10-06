/// <reference types="node" />
/// <reference types="node/http" />
/// <reference types="got/dist/source/core/utils/timed-out" />
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
        header: import("http").IncomingHttpHeaders;
    }>;
}
