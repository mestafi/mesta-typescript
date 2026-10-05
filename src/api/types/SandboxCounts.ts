
/**
 * Object counts: accounts are balance accounts per currency, not virtual accounts. Session counts are live; accounts, deposits and orders fall back to the counts of the sample data if a dependency is unavailable, without failing the status read.
 */
export interface SandboxCounts {
    accounts: number;
    senders: number;
    beneficiaries: number;
    orders: number;
    deposits: number;
    wallets: number;
    webhooks: number;
}
