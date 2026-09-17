
/**
 * Fiat deposit object for list responses (excludes depositDetails)
 */
export interface FiatDepositListItem {
    /** Unique identifier for the deposit */
    id: string;
    /** Deposit amount (decimal with 2 decimal places) */
    amount: string;
    /** Fiat currency code */
    currency: FiatDepositListItem.Currency;
    /** Associated transaction ID */
    transactionId?: string | undefined;
    /** Merchant ID */
    merchantId: string;
    /** Sender ID */
    senderId?: string | undefined;
    /** Deposit bank account ID */
    depositBankAccountId: string;
    /** Creation timestamp */
    createdAt?: string | undefined;
    /** Last update timestamp */
    updatedAt?: string | undefined;
    /** Name of the merchant */
    merchantName?: string | undefined;
    /** Email of the merchant */
    merchantEmail?: string | undefined;
    /** Name of the sender */
    senderName?: string | undefined;
    /** Email of the sender */
    senderEmail?: string | undefined;
}

export namespace FiatDepositListItem {
    /** Fiat currency code */
    export const Currency = {
        Usd: "USD",
        Eur: "EUR",
        Gbp: "GBP",
        Mxn: "MXN",
        Brl: "BRL",
    } as const;
    export type Currency = (typeof Currency)[keyof typeof Currency];
}
