
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
    /** Sandbox only, and always `true`: these deposit instructions are sample data. The holder, bank and account details receive nothing, so never send a real transfer to them; add funds with a simulated deposit (`POST /v1/simulate/deposits`) instead. Absent in production. */
    isTestData?: boolean | undefined;
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
