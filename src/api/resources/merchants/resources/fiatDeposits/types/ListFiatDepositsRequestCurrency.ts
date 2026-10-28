
export const ListFiatDepositsRequestCurrency = {
    Usd: "USD",
    Eur: "EUR",
    Gbp: "GBP",
    Mxn: "MXN",
    Brl: "BRL",
} as const;
export type ListFiatDepositsRequestCurrency =
    (typeof ListFiatDepositsRequestCurrency)[keyof typeof ListFiatDepositsRequestCurrency];
