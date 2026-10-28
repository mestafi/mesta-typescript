
export const ListAccountsRequestSortBy = {
    CreatedAt: "createdAt",
    UpdatedAt: "updatedAt",
} as const;
export type ListAccountsRequestSortBy = (typeof ListAccountsRequestSortBy)[keyof typeof ListAccountsRequestSortBy];
