
export interface ListApiKeysResponse {
    data?: ListApiKeysResponse.Data.Item[] | undefined;
    meta?: ListApiKeysResponse.Meta | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace ListApiKeysResponse {
    export type Data = Data.Item[];

    export namespace Data {
        export interface Item {
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
        }
    }

    export interface Meta {
        /** Total number of API keys */
        total?: number | undefined;
        /** Current page number */
        page?: number | undefined;
        /** Number of items per page */
        pageSize?: number | undefined;
    }
}
