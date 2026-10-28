
import type * as Mesta from "../../../index.js";

export interface CancelOrdersResponse {
    data?: CancelOrdersResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace CancelOrdersResponse {
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
        /** Current status of the order after cancellation */
        status?: Data.Status | undefined;
        /** Remarks provided for the cancellation */
        cancellationRemarks?: string | undefined;
        /** Timestamp when the order was created */
        createdAt?: string | undefined;
        /** Timestamp when the order was last updated (cancelled) */
        updatedAt?: string | undefined;
        /** Customer reference ID for the order */
        customerReferenceId?: string | undefined;
        purpose?: Mesta.Purpose | undefined;
        sourceOfFunds?: Mesta.SourceOfFunds | undefined;
        beneficiaryRelationship?: Mesta.BeneficiaryRelationship | undefined;
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
        /** Blockchain transaction hash for crypto disbursements */
        disbursementBlockchainHash?: (string | null) | undefined;
        /** Name of the payment processing partner used for disbursement */
        paymentProcessingPartner?: (string | null) | undefined;
    }

    export namespace Data {
        /** Current status of the order after cancellation */
        export const Status = {
            Cancelled: "cancelled",
        } as const;
        export type Status = (typeof Status)[keyof typeof Status];
    }
}
