
export interface SandboxKey {
    id: string;
    kind: SandboxKey.Kind;
    apiKey: string;
    /** Shown once; store immediately. */
    apiSecret: string;
    /** The creation or claim deadline. Later verification clears expiry only for keys flagged expires_with_sandbox; a retiring predecessor keeps its 24-hour deadline and is never revived. */
    expiresAt: string;
}

export namespace SandboxKey {
    export const Kind = {
        Standard: "standard",
    } as const;
    export type Kind = (typeof Kind)[keyof typeof Kind];
}
