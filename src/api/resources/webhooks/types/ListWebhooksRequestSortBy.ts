
export const ListWebhooksRequestSortBy = {
    CreatedAt: "createdAt",
    UpdatedAt: "updatedAt",
    Url: "url",
} as const;
export type ListWebhooksRequestSortBy = (typeof ListWebhooksRequestSortBy)[keyof typeof ListWebhooksRequestSortBy];
