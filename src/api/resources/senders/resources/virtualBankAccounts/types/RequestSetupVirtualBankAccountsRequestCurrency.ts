
export const RequestSetupVirtualBankAccountsRequestCurrency = {
    Usd: "USD",
    Eur: "EUR",
    Gbp: "GBP",
    Mxn: "MXN",
} as const;
export type RequestSetupVirtualBankAccountsRequestCurrency =
    (typeof RequestSetupVirtualBankAccountsRequestCurrency)[keyof typeof RequestSetupVirtualBankAccountsRequestCurrency];
