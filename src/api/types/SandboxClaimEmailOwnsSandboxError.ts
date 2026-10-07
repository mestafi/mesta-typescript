
export interface SandboxClaimEmailOwnsSandboxError {
    /** Error details */
    error: SandboxClaimEmailOwnsSandboxError.Error_;
    /** Unique request identifier for debugging */
    requestId: number;
}

export namespace SandboxClaimEmailOwnsSandboxError {
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
            EmailAlreadyOwnsSandbox: "EMAIL_ALREADY_OWNS_SANDBOX",
        } as const;
        export type Code = (typeof Code)[keyof typeof Code];
    }
}
