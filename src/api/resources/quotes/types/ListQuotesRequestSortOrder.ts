
export const ListQuotesRequestSortOrder = {
    Asc: "ASC",
    Desc: "DESC",
} as const;
export type ListQuotesRequestSortOrder = (typeof ListQuotesRequestSortOrder)[keyof typeof ListQuotesRequestSortOrder];
