
import type * as Mesta from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface ListEventsRequest {
    /** Page number (0-indexed) */
    page?: number;
    /** Number of records per page */
    pageSize?: number;
    /** Field to sort by */
    sortBy?: Mesta.ListEventsRequestSortBy;
    /** Sort order */
    sortOrder?: Mesta.ListEventsRequestSortOrder;
    /** Filter by aggregate type */
    aggregateType?: Mesta.ListEventsRequestAggregateType;
    /** Filter by merchant ID */
    merchantId?: string;
    /** Filter by aggregate ID */
    aggregateId?: string;
    /** Filter by event name */
    name?: string;
}
