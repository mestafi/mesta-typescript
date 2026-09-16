
/** Sender virtual bank account capability. */
export const PublicSenderCapability = {
    EurAccount: "eur_account",
    UsdAccount: "usd_account",
    GbpAccount: "gbp_account",
    MxnAccount: "mxn_account",
} as const;
export type PublicSenderCapability = (typeof PublicSenderCapability)[keyof typeof PublicSenderCapability];
