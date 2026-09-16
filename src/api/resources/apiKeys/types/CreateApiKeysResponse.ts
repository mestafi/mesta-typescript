
export interface CreateApiKeysResponse {
    data?: CreateApiKeysResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace CreateApiKeysResponse {
    export interface Data {
        /** Unique identifier for the API key */
        id?: string | undefined;
        /** Timestamp when the API key was created */
        createdAt?: string | undefined;
        /** Timestamp when the API key was last updated */
        updatedAt?: string | undefined;
        /** Human-readable name for the API key */
        name?: string | undefined;
        /** ID of the merchant this API key belongs to */
        merchantId?: string | undefined;
        /** List of permissions granted to this API key */
        permissions?: string[] | undefined;
        /** API secret (only returned on creation, store securely) */
        secret?: string | undefined;
    }
}
