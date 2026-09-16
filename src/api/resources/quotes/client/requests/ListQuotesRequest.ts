
import type * as Mesta from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface ListQuotesRequest {
    /** Records per page */
    pageSize?: number;
    /** Page number */
    page?: number;
    /** Sort column */
    sortBy?: Mesta.ListQuotesRequestSortBy;
    /** Sort order */
    sortOrder?: Mesta.ListQuotesRequestSortOrder;
}
