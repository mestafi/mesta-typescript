
/**
 * @example
 *     {
 *         senderId: "senderId",
 *         amount: 1.1,
 *         currency: "USD"
 *     }
 */
export interface SimulateDepositSendersRequest {
    /** Unique identifier for the sender */
    senderId: string;
    /** Amount to credit, in the deposit currency. Must be greater than 0 and no more than 200 per request. */
    amount: number;
    /** Currency of the deposit account to credit, for example `USD`, `EUR`, `GBP` or `MXN`. The sender must already have a deposit account in this currency. Optional in the contract but effectively required in practice: always pass it explicitly, because omitting it can resolve a different deposit account than you intend and fail with `NO_DEPOSIT_BANK_ACCOUNT_FOUND`. */
    currency?: string;
}
