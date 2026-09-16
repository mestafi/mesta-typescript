
export interface AcceptTermsMerchantsResponse {
    data?: AcceptTermsMerchantsResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace AcceptTermsMerchantsResponse {
    export interface Data {
        /** Whether the terms acceptance was recorded successfully */
        success?: boolean | undefined;
    }
}
