
export interface SandboxSeedStep {
    name: SandboxSeedStep.Name;
    status: SandboxSeedStep.Status;
}

export namespace SandboxSeedStep {
    export const Name = {
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
    export type Name = (typeof Name)[keyof typeof Name];
    export const Status = {
        Pending: "pending",
        Running: "running",
        Done: "done",
        Failed: "failed",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
}
