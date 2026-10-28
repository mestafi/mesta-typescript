
export const GetVirtualBankAccountsRequestCurrency = {
    Usd: "USD",
    Eur: "EUR",
    Gbp: "GBP",
    Mxn: "MXN",
} as const;
export type GetVirtualBankAccountsRequestCurrency =
    (typeof GetVirtualBankAccountsRequestCurrency)[keyof typeof GetVirtualBankAccountsRequestCurrency];
