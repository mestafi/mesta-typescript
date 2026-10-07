
export interface SandboxChallengeUsedError {
    /** Error details */
    error: SandboxChallengeUsedError.Error_;
    /** Unique request identifier for debugging */
    requestId: number;
    sandboxId: string;
    expiresAt: string;
}

export namespace SandboxChallengeUsedError {
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
            ChallengeUsed: "CHALLENGE_USED",
        } as const;
        export type Code = (typeof Code)[keyof typeof Code];
    }
}
