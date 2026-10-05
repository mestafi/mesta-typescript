
export interface SandboxTermsNotAcceptedError {
    /** Error details */
    error: SandboxTermsNotAcceptedError.Error_;
    /** Unique request identifier for debugging */
    requestId: number;
    terms: SandboxTermsNotAcceptedError.Terms;
}

export namespace SandboxTermsNotAcceptedError {
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
            TermsNotAccepted: "TERMS_NOT_ACCEPTED",
        } as const;
        export type Code = (typeof Code)[keyof typeof Code];
    }

    export interface Terms {
        url: string;
        version: string;
    }
}
