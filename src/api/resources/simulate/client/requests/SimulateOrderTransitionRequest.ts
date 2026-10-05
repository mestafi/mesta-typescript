
/**
 * @example
 *     {
 *         id: "id",
 *         status: "rejected",
 *         reasonCode: "compliance_declined"
 *     }
 */
export interface SimulateOrderTransitionRequest {
    /** The order id. */
    id: string;
    /** The target status. No event exists for need_review, payment_submitted, refund_in_progress and refunded. */
    status: SimulateOrderTransitionRequest.Status;
    /** Required for `cancelled` (requested_by_sender, duplicate_order, quote_expired) and `rejected` (compliance_declined, beneficiary_unverified, invalid_payment_details). Any other value answers 400. */
    reasonCode?: SimulateOrderTransitionRequest.ReasonCode;
}

export namespace SimulateOrderTransitionRequest {
    /** The target status. No event exists for need_review, payment_submitted, refund_in_progress and refunded. */
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
    /** Required for `cancelled` (requested_by_sender, duplicate_order, quote_expired) and `rejected` (compliance_declined, beneficiary_unverified, invalid_payment_details). Any other value answers 400. */
    export const ReasonCode = {
        RequestedBySender: "requested_by_sender",
        DuplicateOrder: "duplicate_order",
        QuoteExpired: "quote_expired",
        ComplianceDeclined: "compliance_declined",
        BeneficiaryUnverified: "beneficiary_unverified",
        InvalidPaymentDetails: "invalid_payment_details",
    } as const;
    export type ReasonCode = (typeof ReasonCode)[keyof typeof ReasonCode];
}
