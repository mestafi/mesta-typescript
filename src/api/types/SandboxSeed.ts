
import type * as Mesta from "../index.js";

export interface SandboxSeed {
    status: SandboxSeed.Status;
    /** The step running now. */
    step: SandboxSeed.Step | null;
    /** One entry per step, in run order. */
    steps: Mesta.SandboxSeedStep[];
    completedAt: string | null;
    error: SandboxSeed.Error_ | null;
}

export namespace SandboxSeed {
    export const Status = {
        Running: "running",
        Complete: "complete",
        Failed: "failed",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
    /** The step running now. */
    export const Step = {
        Merchant: "merchant",
        Keys: "keys",
        Terms: "terms",
        MerchantSetup: "merchant_setup",
        Webhook: "webhook",
        Wallets: "wallets",
        Senders: "senders",
        Deposits: "deposits",
        Beneficiaries: "beneficiaries",
        Orders: "orders",
        Fixtures: "fixtures",
    } as const;
    export type Step = (typeof Step)[keyof typeof Step];

    export interface Error_ {
        code: Error_.Code;
        step: Error_.Step;
    }

    export namespace Error_ {
        export const Code = {
            SeedStepTimeout: "SEED_STEP_TIMEOUT",
            PortalUnavailable: "PORTAL_UNAVAILABLE",
            ConductorUnavailable: "CONDUCTOR_UNAVAILABLE",
            InternalRouteFailed: "INTERNAL_ROUTE_FAILED",
            SeedFailed: "SEED_FAILED",
        } as const;
        export type Code = (typeof Code)[keyof typeof Code];
        export const Step = {
            Merchant: "merchant",
            Keys: "keys",
            Terms: "terms",
            MerchantSetup: "merchant_setup",
            Webhook: "webhook",
            Wallets: "wallets",
            Senders: "senders",
            Deposits: "deposits",
            Beneficiaries: "beneficiaries",
            Orders: "orders",
            Fixtures: "fixtures",
        } as const;
        export type Step = (typeof Step)[keyof typeof Step];
    }
}
