
export const ListSendersRequestSortBy = {
    CreatedAt: "createdAt",
    UpdatedAt: "updatedAt",
} as const;
export type ListSendersRequestSortBy = (typeof ListSendersRequestSortBy)[keyof typeof ListSendersRequestSortBy];
