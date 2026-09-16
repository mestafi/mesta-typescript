
export const ListQuotesRequestSortBy = {
    CreatedAt: "createdAt",
    UpdatedAt: "updatedAt",
} as const;
export type ListQuotesRequestSortBy = (typeof ListQuotesRequestSortBy)[keyof typeof ListQuotesRequestSortBy];
