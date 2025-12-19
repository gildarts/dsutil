export declare const DSNS = "https://dsns.ischool.com.tw";
/** 註冊本地端 DSNS */
export declare function registerLocal(dsns: string, url: string): void;
export declare function resolveDSNS(dsns: string, timeoutMs?: number): Promise<string>;
