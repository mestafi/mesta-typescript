
/**
 * The 503 body of the challenge, create and sign-up routes. PROVISIONING_PAUSED adds pauseMessage at the root beside error and requestId; SANDBOX_SERVICE_UNAVAILABLE has no pauseMessage.
 */
export interface SandboxProvisioningPausedError {
    /** Error details */
    error: SandboxProvisioningPausedError.Error_;
    /** Unique request identifier for debugging */
    requestId: number;
    /** Present with PROVISIONING_PAUSED: Mesta's message to developers while new sandboxes are paused (for example when they resume), or null when none is set. Show it as given. */
    pauseMessage?: (string | null) | undefined;
}

export namespace SandboxProvisioningPausedError {
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
            ProvisioningPaused: "PROVISIONING_PAUSED",
            SandboxServiceUnavailable: "SANDBOX_SERVICE_UNAVAILABLE",
        } as const;
        export type Code = (typeof Code)[keyof typeof Code];
    }
}
