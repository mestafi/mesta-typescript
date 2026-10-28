
import type * as Mesta from "../../../index.js";

export interface GetOrdersResponse {
    data?: GetOrdersResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace GetOrdersResponse {
    export interface Data {
        /** Unique identifier for the order */
        id?: string | undefined;
        /** Identifier of the sender */
        senderId?: string | undefined;
        /** Identifier of the merchant */
        merchantId?: string | undefined;
        /** Identifier of the beneficiary */
        beneficiaryId?: string | undefined;
        /** Source currency code */
        sourceCurrency?: string | undefined;
        /** Target currency code */
        targetCurrency?: string | undefined;
        /** Accepted amount in source currency */
        acceptedGrossSourceAmount?: string | undefined;
        /** Amount in target currency */
        targetAmount?: string | undefined;
        /** Identifier of the accepted quote */
        acceptedQuoteId?: string | undefined;
        /** Current status of the order */
        status?: Data.Status | undefined;
        /** Identifier of the batch order (if part of a batch) */
        batchOrderId?: (string | null) | undefined;
        /** Remarks for order cancellation */
        cancellationRemarks?: (string | null) | undefined;
        /** Name of the merchant */
        merchantName?: string | undefined;
        /** Name of the sender */
        senderName?: string | undefined;
        /** Name of the beneficiary */
        beneficiaryName?: string | undefined;
        /** Timestamp when the order was created */
        createdAt?: string | undefined;
        /** Timestamp when the order was last updated */
        updatedAt?: string | undefined;
        /** Timestamp when the awaiting funds status expires */
        awaitingFundsExpiresAt?: (string | null) | undefined;
        purpose?: Mesta.Purpose | undefined;
        sourceOfFunds?: Mesta.SourceOfFunds | undefined;
        beneficiaryRelationship?: Mesta.BeneficiaryRelationship | undefined;
        /** Array of supporting documents */
        documents?: Mesta.OrderDocument[] | undefined;
        /** SWIFT Universal End-to-End Transaction Reference for tracking wire transfers */
        uetr?: (string | null) | undefined;
        /** Fedwire Input Message Accountability Data for tracking domestic wire transfers */
        imad?: (string | null) | undefined;
        /** Custom metadata attached to the order */
        metadata?: (Record<string, unknown> | null) | undefined;
        /** Reason for order rejection, if the order was declined */
        rejectionRemarks?: (string | null) | undefined;
        /** Identifier of the payment method used for this order */
        paymentMethodId?: (string | null) | undefined;
        /** Merchant's internal reference ID for this order */
        customerReferenceId?: (string | null) | undefined;
        /** Blockchain transaction hash for crypto disbursements */
        disbursementBlockchainHash?: (string | null) | undefined;
        /** Name of the payment processing partner used for disbursement */
        paymentProcessingPartner?: (string | null) | undefined;
    }

    export namespace Data {
        /** Current status of the order */
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
            RefundInProgress: "refund_in_progress",
            Refunded: "refunded",
            PaymentSubmitted: "payment_submitted",
            Rejected: "rejected",
            Returned: "returned",
        } as const;
        export type Status = (typeof Status)[keyof typeof Status];
    }
}
