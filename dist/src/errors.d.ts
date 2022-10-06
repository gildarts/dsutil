export declare class DSAError extends Error {
    code: string;
    detail?: any;
    constructor(message: string, code: string, detail?: any);
}
