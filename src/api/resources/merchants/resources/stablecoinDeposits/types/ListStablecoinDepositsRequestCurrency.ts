
export const ListStablecoinDepositsRequestCurrency = {
    Usdc: "USDC",
    Usdt: "USDT",
    Eurc: "EURC",
    Dai: "DAI",
} as const;
export type ListStablecoinDepositsRequestCurrency =
    (typeof ListStablecoinDepositsRequestCurrency)[keyof typeof ListStablecoinDepositsRequestCurrency];
