
import type * as Mesta from "../index.js";

export interface SandboxMachineCreated {
    status: SandboxMachineCreated.Status;
    /** Create response only, while unclaimed, and only when the request carried no `claimEmail`. A single-use bearer capability in the URL fragment: whoever opens it owns the sandbox. */
    claimUrl?: string | undefined;
    /** Present instead of `claimUrl` when the request carried `claimEmail`: the claim link went to that address. */
    claim?: SandboxMachineCreated.Claim | undefined;
    seed: SandboxMachineCreated.Seed;
    sandboxId: string;
    merchantId: string;
    plane: SandboxMachineCreated.Plane;
    apiBaseUrl: string;
    portalUrl: string;
    createdAt: string;
    /** The non-null deadline at issuance: seven days from machine creation or 72 hours from signup or claim. Later status reads report null after verification. */
    expiresAt: string;
    terms: Mesta.SandboxTerms;
    docs: SandboxMachineCreated.Docs;
    message: string;
    /** Fresh pairs only. On claim with keepPreClaimKeys=true this array is empty; retained secrets are never returned again. */
    keys: Mesta.SandboxKey[];
}

export namespace SandboxMachineCreated {
    export const Status = {
        Unclaimed: "unclaimed",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];

    /**
     * Present instead of `claimUrl` when the request carried `claimEmail`: the claim link went to that address.
     */
    export interface Claim {
        /** The masked address the claim link was emailed to, for example `d***@example.com`. */
        sentTo: string;
    }

    export interface Seed {
        status: Seed.Status;
    }

    export namespace Seed {
        export const Status = {
            Running: "running",
        } as const;
        export type Status = (typeof Status)[keyof typeof Status];
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
