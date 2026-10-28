
import type * as Mesta from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface ListOrdersRequest {
    /** Filter by order ID */
    id?: string;
    /** Filter by source currency */
    sourceCurrency?: string;
    /** Filter by accepted gross source amount */
    acceptedGrossSourceAmount?: string;
    /** Filter by sender ID */
    senderId?: string;
    /** Filter by order status. */
    status?: Mesta.ListOrdersRequestStatus;
    /** Filter orders starting from this date (ISO8601 format). */
    startDate?: string;
    /** Filter orders up to this date (ISO8601 format). */
    endDate?: string;
    /** Filter by target currency ISO code (e.g., "EUR", "GBP"). */
    targetCurrency?: string;
    /** Pagination page number. */
    page?: number;
    /** Number of orders per page. */
    pageSize?: number;
    /** Field to sort the orders by (e.g., "creationDate", "amount"). */
    sortBy?: string;
    /** Sort order (ascending or descending). */
    sortOrder?: Mesta.ListOrdersRequestSortOrder;
}
