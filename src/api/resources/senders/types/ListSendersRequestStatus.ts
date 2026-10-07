
/** Filter senders by account status; kyc.status or kyb.status reports verification separately */
export const ListSendersRequestStatus = {
    Active: "active",
    Inactive: "inactive",
} as const;
export type ListSendersRequestStatus = (typeof ListSendersRequestStatus)[keyof typeof ListSendersRequestStatus];
