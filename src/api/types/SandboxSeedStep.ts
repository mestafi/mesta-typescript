
export interface SandboxSeedStep {
    name: SandboxSeedStep.Name;
    /** skipped: the step does not apply in this sandbox, as the wallets step while test-network wallets are not offered. A skipped step is never retried and is not a failure. */
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
    /** skipped: the step does not apply in this sandbox, as the wallets step while test-network wallets are not offered. A skipped step is never retried and is not a failure. */
    export const Status = {
        Pending: "pending",
        Running: "running",
        Done: "done",
        Failed: "failed",
        Skipped: "skipped",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
}
