
export const GetSetupStatusVirtualBankAccountsRequestCurrency = {
    Usd: "USD",
    Eur: "EUR",
    Gbp: "GBP",
    Mxn: "MXN",
} as const;
export type GetSetupStatusVirtualBankAccountsRequestCurrency =
    (typeof GetSetupStatusVirtualBankAccountsRequestCurrency)[keyof typeof GetSetupStatusVirtualBankAccountsRequestCurrency];
