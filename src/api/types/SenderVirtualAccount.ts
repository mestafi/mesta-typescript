
/**
 * A virtual bank account available to the sender.
 */
export interface SenderVirtualAccount {
    id?: string | undefined;
    name?: string | undefined;
    address?: string | undefined;
    accountNumber?: string | undefined;
    routingDetails?: Record<string, unknown>[] | undefined;
    reference?: string | undefined;
    bankDetails?: SenderVirtualAccount.BankDetails | undefined;
    bic?: (string | null) | undefined;
    sortCode?: (string | null) | undefined;
    currency?: SenderVirtualAccount.Currency | undefined;
    status?: string | undefined;
}

export namespace SenderVirtualAccount {
    export interface BankDetails {
        name?: string | undefined;
        address?: string | undefined;
    }

    export const Currency = {
        Usd: "USD",
        Eur: "EUR",
        Gbp: "GBP",
        Mxn: "MXN",
    } as const;
    export type Currency = (typeof Currency)[keyof typeof Currency];
}
