
export const ListOrdersRequestSortOrder = {
    Asc: "asc",
    Desc: "desc",
} as const;
export type ListOrdersRequestSortOrder = (typeof ListOrdersRequestSortOrder)[keyof typeof ListOrdersRequestSortOrder];
