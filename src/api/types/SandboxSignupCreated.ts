
import type * as Mesta from "../index.js";

export interface SandboxSignupCreated {
    seed: SandboxSignupCreated.Seed;
    status: SandboxSignupCreated.Status;
    emailVerified: boolean;
    session: SandboxSignupCreated.Session;
    sandboxId: string;
    merchantId: string;
    plane: SandboxSignupCreated.Plane;
    apiBaseUrl: string;
    portalUrl: string;
    createdAt: string;
    /** The non-null deadline at issuance: seven days from machine creation or 72 hours from signup or claim. Later status reads report null after verification. */
    expiresAt: string;
    terms: Mesta.SandboxTerms;
    docs: SandboxSignupCreated.Docs;
    message: string;
    /** Fresh pairs only. On claim with keepPreClaimKeys=true this array is empty; retained secrets are never returned again. */
    keys: Mesta.SandboxKey[];
}

export namespace SandboxSignupCreated {
    export interface Seed {
        status: Seed.Status;
    }

    export namespace Seed {
        export const Status = {
            Running: "running",
        } as const;
        export type Status = (typeof Status)[keyof typeof Status];
    }

    export const Status = {
        Claimed: "claimed",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];

    export interface Session {
        accessToken: string;
        refreshToken: string;
    }

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
