
export const ListApiKeysRequestSortBy = {
    CreatedAt: "createdAt",
    UpdatedAt: "updatedAt",
    Name: "name",
} as const;
export type ListApiKeysRequestSortBy = (typeof ListApiKeysRequestSortBy)[keyof typeof ListApiKeysRequestSortBy];
