
export interface SandboxKeyMetadata {
    id: string;
    kind: SandboxKeyMetadata.Kind;
    /** Nullable expiry. Verification clears it only for keys flagged expires_with_sandbox; a retiring predecessor keeps its 24-hour deadline and is never revived. */
    expiresAt: string | null;
    /** Null until used; stamped at most once a minute. */
    lastUsedAt: string | null;
}

export namespace SandboxKeyMetadata {
    export const Kind = {
        Standard: "standard",
        Agent: "agent",
        Docs: "docs",
    } as const;
    export type Kind = (typeof Kind)[keyof typeof Kind];
}
