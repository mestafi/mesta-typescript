
export const ListSendersRequestSortOrder = {
    Asc: "ASC",
    Desc: "DESC",
} as const;
export type ListSendersRequestSortOrder =
    (typeof ListSendersRequestSortOrder)[keyof typeof ListSendersRequestSortOrder];
