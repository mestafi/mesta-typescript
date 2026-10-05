
export interface SandboxDepositSourceError {
    /** Error details */
    error: SandboxDepositSourceError.Error_;
    /** Unique request identifier for debugging */
    requestId: number;
}

export namespace SandboxDepositSourceError {
    /**
     * Error details
     */
    export interface Error_ {
        /** Machine-readable error code */
        CODE: Error_.Code;
        /** Human-readable error message */
        MESSAGE: string;
        /** Additional error details for validation errors */
        DETAILS?: (string[] | null) | undefined;
    }

    export namespace Error_ {
        /** Machine-readable error code */
        export const Code = {
            NotAvailableInSandbox: "NOT_AVAILABLE_IN_SANDBOX",
        } as const;
        export type Code = (typeof Code)[keyof typeof Code];
    }
}
