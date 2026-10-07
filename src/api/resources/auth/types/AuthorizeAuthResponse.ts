
export interface AuthorizeAuthResponse {
    data?: AuthorizeAuthResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace AuthorizeAuthResponse {
    export interface Data {
        kind?: Data.Kind | undefined;
        plane?: Data.Plane | undefined;
        /** Null outside a sandbox merchant. */
        sandboxId?: (string | null) | undefined;
        /** Nullable expiry. Verification clears it only for keys flagged expires_with_sandbox; a retiring predecessor keeps its 24-hour deadline and is never revived. */
        expiresAt?: (string | null) | undefined;
        /** ID of the authenticated principal */
        id?: string | undefined;
        /** Type of principal (user or apiKey) */
        entity?: string | undefined;
        /** The authenticated user or API key data */
        data?: Record<string, unknown> | undefined;
    }

    export namespace Data {
        export const Kind = {
            Standard: "standard",
            Agent: "agent",
            Docs: "docs",
        } as const;
        export type Kind = (typeof Kind)[keyof typeof Kind];
        export const Plane = {
            Local: "local",
            Dev: "dev",
            Staging: "staging",
            Sandbox: "sandbox",
            Production: "production",
        } as const;
        export type Plane = (typeof Plane)[keyof typeof Plane];
    }
}
