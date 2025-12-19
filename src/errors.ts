export class DSAError extends Error {
    constructor(
        message: string,
        public readonly code: string,
        public readonly detail?: any
    ) {
        super(message);
        this.name = 'DSAError';
    }
}
