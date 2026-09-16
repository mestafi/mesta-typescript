
export const UpdateSetupDataVirtualBankAccountsRequestCurrency = {
    Usd: "USD",
    Eur: "EUR",
    Gbp: "GBP",
    Mxn: "MXN",
} as const;
export type UpdateSetupDataVirtualBankAccountsRequestCurrency =
    (typeof UpdateSetupDataVirtualBankAccountsRequestCurrency)[keyof typeof UpdateSetupDataVirtualBankAccountsRequestCurrency];
