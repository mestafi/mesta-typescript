
export const ListStablecoinDepositsRequestSortBy = {
    CreatedAt: "createdAt",
    UpdatedAt: "updatedAt",
} as const;
export type ListStablecoinDepositsRequestSortBy =
    (typeof ListStablecoinDepositsRequestSortBy)[keyof typeof ListStablecoinDepositsRequestSortBy];
