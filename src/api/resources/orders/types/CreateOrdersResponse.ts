
import type * as Mesta from "../../../index.js";

export interface CreateOrdersResponse {
    data?: CreateOrdersResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace CreateOrdersResponse {
    export interface Data {
        id?: string | undefined;
        senderId?: string | undefined;
        paymentMethodId?: string | undefined;
        beneficiaryId?: string | undefined;
        merchantId?: string | undefined;
        acceptedQuoteId?: string | undefined;
        /** Current status of the order */
        status?: string | undefined;
        purpose?: Mesta.Purpose | undefined;
        metadata?: Record<string, unknown> | undefined;
        beneficiaryRelationship?: Mesta.BeneficiaryRelationship | undefined;
        sourceOfFunds?: Mesta.SourceOfFunds | undefined;
        customerReferenceId?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        /** SWIFT Universal End-to-End Transaction Reference for tracking wire transfers */
        uetr?: (string | null) | undefined;
        /** Fedwire Input Message Accountability Data for tracking domestic wire transfers */
        imad?: (string | null) | undefined;
        /** Reason for order rejection, if the order was declined */
        rejectionRemarks?: (string | null) | undefined;
        /** Blockchain transaction hash for crypto disbursements */
        disbursementBlockchainHash?: (string | null) | undefined;
        /** Name of the payment processing partner used for disbursement */
        paymentProcessingPartner?: (string | null) | undefined;
    }
}
