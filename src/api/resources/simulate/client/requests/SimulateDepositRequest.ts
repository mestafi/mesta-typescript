
/**
 * @example
 *     {
 *         ownerType: "sender",
 *         ownerId: "00000000-0000-4000-a000-000000000001",
 *         currency: "USD",
 *         amount: "500.00",
 *         outcome: "settled"
 *     }
 *
 * @example
 *     {
 *         ownerType: "sender",
 *         ownerId: "00000000-0000-4000-a000-000000000001",
 *         currency: "USDC_POL",
 *         amount: "500.123456",
 *         outcome: "settled"
 *     }
 */
export interface SimulateDepositRequest {
    ownerType: SimulateDepositRequest.OwnerType;
    /** The sender's id, or your merchant id. */
    ownerId: string;
    /** Any fiat or stablecoin currency the sandbox serves, for example USD or USDC_POL. */
    currency: string;
    /** A decimal string; up to 18 decimals for stablecoins, 2 for fiat. */
    amount: string;
    /** `settled` credits the balance and publishes the settled event; `rejected` writes a rejected deposit with no balance change. */
    outcome: SimulateDepositRequest.Outcome;
}

export namespace SimulateDepositRequest {
    export const OwnerType = {
        Sender: "sender",
        Merchant: "merchant",
    } as const;
    export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType];
    /** `settled` credits the balance and publishes the settled event; `rejected` writes a rejected deposit with no balance change. */
    export const Outcome = {
        Settled: "settled",
        Rejected: "rejected",
    } as const;
    export type Outcome = (typeof Outcome)[keyof typeof Outcome];
}
