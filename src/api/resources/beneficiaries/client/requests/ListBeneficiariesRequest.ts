
import type * as Mesta from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface ListBeneficiariesRequest {
    /** Page number (zero-based) */
    page?: number;
    /** Number of items per page */
    pageSize?: number;
    /** Field to sort by */
    sortBy?: Mesta.ListBeneficiariesRequestSortBy;
    /** Sort order */
    sortOrder?: Mesta.ListBeneficiariesRequestSortOrder;
}
