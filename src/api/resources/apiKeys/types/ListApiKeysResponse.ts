
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
            kind?: Item.Kind | undefined;
            /** Nullable expiry. Verification clears it only for keys flagged expires_with_sandbox; a retiring predecessor keeps its 24-hour deadline and is never revived. */
            expiresAt?: (string | null) | undefined;
            /** Null before first use; updated at most once a minute. */
            lastUsedAt?: (string | null) | undefined;
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

        export namespace Item {
            export const Kind = {
                Standard: "standard",
                Agent: "agent",
                Docs: "docs",
            } as const;
            export type Kind = (typeof Kind)[keyof typeof Kind];
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
