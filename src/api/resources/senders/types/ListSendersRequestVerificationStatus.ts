
/** Filter senders by verification status: kyc.status for individuals, kyb.status for businesses */
export const ListSendersRequestVerificationStatus = {
    Unverified: "unverified",
    Pending: "pending",
    Approved: "approved",
    Declined: "declined",
} as const;
export type ListSendersRequestVerificationStatus =
    (typeof ListSendersRequestVerificationStatus)[keyof typeof ListSendersRequestVerificationStatus];
