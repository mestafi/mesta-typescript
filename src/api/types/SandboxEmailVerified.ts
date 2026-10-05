
export interface SandboxEmailVerified {
    emailVerified: boolean;
    /** Nullable expiry. Verification clears it only for keys flagged expires_with_sandbox; a retiring predecessor keeps its 24-hour deadline and is never revived. */
    expiresAt: string | null;
}
