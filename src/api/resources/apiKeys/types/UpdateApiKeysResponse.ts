
export interface UpdateApiKeysResponse {
    data?: UpdateApiKeysResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace UpdateApiKeysResponse {
    export interface Data {
        kind?: Data.Kind | undefined;
        /** Nullable expiry. Verification clears it only for keys flagged expires_with_sandbox; a retiring predecessor keeps its 24-hour deadline and is never revived. */
        expiresAt?: (string | null) | undefined;
        /** Null before first use; updated at most once a minute. */
        lastUsedAt?: (string | null) | undefined;
        /** Fresh secret returned once only when rotate=true; absent on ordinary updates. */
        secret?: string | undefined;
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

    export namespace Data {
        export const Kind = {
            Standard: "standard",
            Agent: "agent",
            Docs: "docs",
        } as const;
        export type Kind = (typeof Kind)[keyof typeof Kind];
    }
}
