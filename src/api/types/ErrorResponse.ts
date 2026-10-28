
export interface ErrorResponse {
    /** Error details */
    error?: ErrorResponse.Error_ | undefined;
    /** Unique request identifier for debugging */
    requestId?: number | undefined;
}

export namespace ErrorResponse {
    /**
     * Error details
     */
    export interface Error_ {
        /** Machine-readable error code */
        CODE: string;
        /** Human-readable error message */
        MESSAGE: string;
        /** Additional error details for validation errors */
        DETAILS?: (string[] | null) | undefined;
    }
}
