
/**
 * The 403 body of the challenge, create and sign-up routes until the sandbox opens to the public. Mesta's firewall returns it before the API, so it carries no requestId.
 */
export interface SandboxNotOpenError {
    /** Error details */
    error: SandboxNotOpenError.Error_;
}

export namespace SandboxNotOpenError {
    /**
     * Error details
     */
    export interface Error_ {
        /** Machine-readable error code */
        CODE: Error_.Code;
        /** Human-readable error message */
        MESSAGE: string;
    }

    export namespace Error_ {
        /** Machine-readable error code */
        export const Code = {
            SandboxNotOpen: "SANDBOX_NOT_OPEN",
        } as const;
        export type Code = (typeof Code)[keyof typeof Code];
    }
}
