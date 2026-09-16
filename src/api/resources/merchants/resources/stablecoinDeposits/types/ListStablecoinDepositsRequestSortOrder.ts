
export const ListStablecoinDepositsRequestSortOrder = {
    Asc: "ASC",
    Desc: "DESC",
} as const;
export type ListStablecoinDepositsRequestSortOrder =
    (typeof ListStablecoinDepositsRequestSortOrder)[keyof typeof ListStablecoinDepositsRequestSortOrder];
