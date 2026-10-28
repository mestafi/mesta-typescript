
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {}
 */
export interface ListAccountsRequest {
    /** Records per page */
    pageSize?: number;
    /** Page number */
    page?: number;
    /** Sort column */
    sortBy?: Mesta.merchants.ListAccountsRequestSortBy;
    /** Sort order */
    sortOrder?: Mesta.merchants.ListAccountsRequestSortOrder;
}
