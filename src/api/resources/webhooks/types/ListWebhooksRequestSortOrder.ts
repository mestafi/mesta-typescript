
export const ListWebhooksRequestSortOrder = {
    Asc: "asc",
    Desc: "desc",
} as const;
export type ListWebhooksRequestSortOrder =
    (typeof ListWebhooksRequestSortOrder)[keyof typeof ListWebhooksRequestSortOrder];
