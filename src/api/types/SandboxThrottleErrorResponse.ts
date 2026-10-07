
/**
 * Route throttles return object DETAILS.retryAfterMs; request-rate and service throttles can retain the ordinary error details.
 */
export interface SandboxThrottleErrorResponse {
    /** Error details */
    error?: SandboxThrottleErrorResponse.Error_ | undefined;
    /** Unique request identifier for debugging */
    requestId?: number | undefined;
}

export namespace SandboxThrottleErrorResponse {
    /**
     * Error details
     */
    export interface Error_ {
        /** Machine-readable error code */
        CODE: string;
        /** Human-readable error message */
        MESSAGE: string;
        DETAILS?: Error_.Details | undefined;
    }

    export namespace Error_ {
        export type Details =
            | string[]
            | null
            | {
                  retryAfterMs: number;
              };
    }
}
