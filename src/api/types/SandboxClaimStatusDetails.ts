
export interface SandboxClaimStatusDetails {
    status: SandboxClaimStatusDetails.Status;
    sandboxId: string;
    shortId?: string | undefined;
    merchantName: string;
    createdAt: string;
    expiresAt: string | null;
    seed: SandboxClaimStatusDetails.Seed;
    /** accounts: balance accounts per currency, excluding virtual accounts. All seven counts are integers. */
    counts: SandboxClaimStatusDetails.Counts;
    /** Pre-claim key metadata for fresh tokens; empty otherwise. */
    preClaimKeys: SandboxClaimStatusDetails.PreClaimKeys.Item[];
    /** Pre-claim receiver hosts for fresh tokens; empty otherwise. */
    preClaimEndpoints: SandboxClaimStatusDetails.PreClaimEndpoints.Item[];
}

export namespace SandboxClaimStatusDetails {
    export const Status = {
        Fresh: "fresh",
        Seeding: "seeding",
        Expired: "expired",
        Used: "used",
        Killed: "killed",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];

    export interface Seed {
        /** The step running now. */
        step: Seed.Step | null;
    }

    export namespace Seed {
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
    }

    /**
     * accounts: balance accounts per currency, excluding virtual accounts. All seven counts are integers.
     */
    export interface Counts {
        accounts: number;
        wallets: number;
        webhooks: number;
        senders: number;
        beneficiaries: number;
        orders: number;
        deposits: number;
    }

    export type PreClaimKeys = PreClaimKeys.Item[];

    export namespace PreClaimKeys {
        export interface Item {
            id: string;
            kind: Item.Kind;
            createdAt: string;
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

    export type PreClaimEndpoints = PreClaimEndpoints.Item[];

    export namespace PreClaimEndpoints {
        export interface Item {
            /** Hostname of a registered webhook receiver. */
            host: string;
        }
    }
}
