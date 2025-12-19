export declare class DSAError extends Error {
    readonly code: string;
    readonly detail?: any;
    constructor(message: string, code: string, detail?: any);
}
