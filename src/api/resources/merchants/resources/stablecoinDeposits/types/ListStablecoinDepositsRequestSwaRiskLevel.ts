
export const ListStablecoinDepositsRequestSwaRiskLevel = {
    Low: "low",
    Medium: "medium",
    High: "high",
    Critical: "critical",
} as const;
export type ListStablecoinDepositsRequestSwaRiskLevel =
    (typeof ListStablecoinDepositsRequestSwaRiskLevel)[keyof typeof ListStablecoinDepositsRequestSwaRiskLevel];
