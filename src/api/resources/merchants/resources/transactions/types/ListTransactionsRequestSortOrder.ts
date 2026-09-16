
export const ListTransactionsRequestSortOrder = {
    Asc: "ASC",
    Desc: "DESC",
} as const;
export type ListTransactionsRequestSortOrder =
    (typeof ListTransactionsRequestSortOrder)[keyof typeof ListTransactionsRequestSortOrder];
