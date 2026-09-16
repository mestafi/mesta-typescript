
export interface SelfieVerificationSession {
    kycLink?: string | undefined;
    status?: SelfieVerificationSession.Status | undefined;
    expiryTimestamp?: number | undefined;
    createdTimestamp?: number | undefined;
}

export namespace SelfieVerificationSession {
    export const Status = {
        NotStarted: "NOT_STARTED",
        Running: "RUNNING",
        Pending: "PENDING",
        Approved: "APPROVED",
        Declined: "DECLINED",
        Expired: "EXPIRED",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
}
