
import type * as Mesta from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface ListPaymentMethodsRequest {
    /** Page number (0-indexed) */
    page?: number;
    /** Number of records per page */
    pageSize?: number;
    /** Field to sort by */
    sortBy?: Mesta.ListPaymentMethodsRequestSortBy;
    /** Sort order */
    sortOrder?: Mesta.ListPaymentMethodsRequestSortOrder;
    /** Search query */
    search?: string;
    /** Filter by beneficiary ID */
    beneficiaryId?: string;
    /** Filter by payment method type */
    type?: Mesta.PaymentMethodType;
    /** Filter by status */
    status?: Mesta.PaymentMethodStatus;
}
