
export const ListEventsRequestSortBy = {
    CreatedAt: "createdAt",
    UpdatedAt: "updatedAt",
} as const;
export type ListEventsRequestSortBy = (typeof ListEventsRequestSortBy)[keyof typeof ListEventsRequestSortBy];
