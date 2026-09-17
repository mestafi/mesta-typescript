
/** Filter senders by their verification status */
export const ListSendersRequestStatus = {
    Approved: "approved",
    Pending: "pending",
    Declined: "declined",
    Unverified: "unverified",
} as const;
export type ListSendersRequestStatus = (typeof ListSendersRequestStatus)[keyof typeof ListSendersRequestStatus];
