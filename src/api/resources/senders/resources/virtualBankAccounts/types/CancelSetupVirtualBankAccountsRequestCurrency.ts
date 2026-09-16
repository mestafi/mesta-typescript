
export const CancelSetupVirtualBankAccountsRequestCurrency = {
    Usd: "USD",
    Eur: "EUR",
    Gbp: "GBP",
    Mxn: "MXN",
} as const;
export type CancelSetupVirtualBankAccountsRequestCurrency =
    (typeof CancelSetupVirtualBankAccountsRequestCurrency)[keyof typeof CancelSetupVirtualBankAccountsRequestCurrency];
