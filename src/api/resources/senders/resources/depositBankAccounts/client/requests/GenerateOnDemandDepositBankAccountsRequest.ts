
/**
 * @example
 *     {
 *         id: "id",
 *         currency: "EUR"
 *     }
 *
 * @example
 *     {
 *         id: "id",
 *         currency: "GBP"
 *     }
 *
 * @example
 *     {
 *         id: "id",
 *         currency: "MXN"
 *     }
 *
 * @example
 *     {
 *         id: "id",
 *         currency: "USD"
 *     }
 */
export interface GenerateOnDemandDepositBankAccountsRequest {
    /** ID of the sender */
    id: string;
    /** The currency for the deposit bank account. */
    currency: GenerateOnDemandDepositBankAccountsRequest.Currency;
}

export namespace GenerateOnDemandDepositBankAccountsRequest {
    /** The currency for the deposit bank account. */
    export const Currency = {
        Eur: "EUR",
        Gbp: "GBP",
        Mxn: "MXN",
        Usd: "USD",
    } as const;
    export type Currency = (typeof Currency)[keyof typeof Currency];
}
