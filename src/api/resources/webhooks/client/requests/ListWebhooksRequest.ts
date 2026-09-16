
import type * as Mesta from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface ListWebhooksRequest {
    /** Page number for pagination */
    page?: number;
    /** Number of webhooks per page */
    pageSize?: number;
    /** Field to sort the webhooks by */
    sortBy?: Mesta.ListWebhooksRequestSortBy;
    /** Sort order (ascending or descending) */
    sortOrder?: Mesta.ListWebhooksRequestSortOrder;
    /** Filter webhooks by specific event type */
    event?: Mesta.ListWebhooksRequestEvent;
}
