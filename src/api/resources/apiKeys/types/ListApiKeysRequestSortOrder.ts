
export const ListApiKeysRequestSortOrder = {
    Asc: "ASC",
    Desc: "DESC",
} as const;
export type ListApiKeysRequestSortOrder =
    (typeof ListApiKeysRequestSortOrder)[keyof typeof ListApiKeysRequestSortOrder];
