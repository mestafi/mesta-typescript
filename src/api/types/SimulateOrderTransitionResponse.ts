
export interface SimulateOrderTransitionResponse {
    data: SimulateOrderTransitionResponse.Data;
    requestId: number;
}

export namespace SimulateOrderTransitionResponse {
    export interface Data {
        id: string;
        status: Data.Status;
        /** Additional published event names, in order, when the transition publishes two. event holds the first; success publishes only order:success. */
        events?: string[] | undefined;
        /** The `order:*` event that was published, or null for a status without one. */
        event: string | null;
    }

    export namespace Data {
        export const Status = {
            Created: "created",
            AwaitingBeneficiaryVerification: "awaiting_beneficiary_verification",
            AwaitingFunds: "awaiting_funds",
            AwaitingFundsTimeout: "awaiting_funds_timeout",
            NeedReview: "need_review",
            FundsReceived: "funds_received",
            InProgress: "in_progress",
            SentToBeneficiary: "sent_to_beneficiary",
            Success: "success",
            Failed: "failed",
            Cancelled: "cancelled",
            Rejected: "rejected",
            Returned: "returned",
            PaymentSubmitted: "payment_submitted",
            RefundInProgress: "refund_in_progress",
            Refunded: "refunded",
        } as const;
        export type Status = (typeof Status)[keyof typeof Status];
    }
}
