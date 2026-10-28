
export const ListFiatDepositsRequestSortOrder = {
    Asc: "ASC",
    Desc: "DESC",
} as const;
export type ListFiatDepositsRequestSortOrder =
    (typeof ListFiatDepositsRequestSortOrder)[keyof typeof ListFiatDepositsRequestSortOrder];
