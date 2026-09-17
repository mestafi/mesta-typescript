
export const ListFiatDepositsRequestSortBy = {
    CreatedAt: "createdAt",
    UpdatedAt: "updatedAt",
} as const;
export type ListFiatDepositsRequestSortBy =
    (typeof ListFiatDepositsRequestSortBy)[keyof typeof ListFiatDepositsRequestSortBy];
