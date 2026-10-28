
export const ListAccountsRequestSortOrder = {
    Asc: "ASC",
    Desc: "DESC",
} as const;
export type ListAccountsRequestSortOrder =
    (typeof ListAccountsRequestSortOrder)[keyof typeof ListAccountsRequestSortOrder];
