
import type * as Mesta from "../index.js";

/**
 * Common once-only issuance data for machine creation, signup and claim. Concrete variants specify the lifecycle state, claim URL and session.
 */
export interface SandboxCreated {
    sandboxId: string;
    merchantId: string;
    plane: SandboxCreated.Plane;
    apiBaseUrl: string;
    portalUrl: string;
    createdAt: string;
    /** The non-null deadline at issuance: seven days from machine creation or 72 hours from signup or claim. Later status reads report null after verification. */
    expiresAt: string;
    terms: Mesta.SandboxTerms;
    docs: SandboxCreated.Docs;
    message: string;
    /** Fresh pairs only. On claim with keepPreClaimKeys=true this array is empty; retained secrets are never returned again. */
    keys: Mesta.SandboxKey[];
    seed: Mesta.SandboxSeedPointer;
}

export namespace SandboxCreated {
    export const Plane = {
        Sandbox: "sandbox",
    } as const;
    export type Plane = (typeof Plane)[keyof typeof Plane];

    export interface Docs {
        quickstart: string;
        sandbox: string;
        magicValues: string;
    }
}
