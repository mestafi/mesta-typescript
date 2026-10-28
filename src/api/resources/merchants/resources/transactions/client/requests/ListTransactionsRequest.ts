
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         sortBy: "createdAt"
 *     }
 */
export interface ListTransactionsRequest {
    /** Filter by currency code */
    currency?: string;
    /** Filter by transaction type */
    type?: string;
    /** Filter by sender ID */
    senderId?: string;
    /** Filter by transaction ID */
    transactionId?: string;
    /** Filter by virtual transaction ID */
    virtualTransactionId?: string;
    /** Filter by order ID */
    orderId?: string;
    /** Records per page */
    pageSize?: number;
    /** Page number */
    page?: number;
    /** Sort column */
    sortBy?: string;
    /** Sort order */
    sortOrder?: Mesta.merchants.ListTransactionsRequestSortOrder;
}
