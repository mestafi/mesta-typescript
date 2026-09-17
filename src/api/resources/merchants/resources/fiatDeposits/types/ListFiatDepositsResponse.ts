
import type * as Mesta from "../../../../../index.js";

export interface ListFiatDepositsResponse {
    data?: Mesta.FiatDepositListItem[] | undefined;
    /** Total number of fiat deposits matching the query */
    total?: number | undefined;
    /** Whether there are more results available */
    hasNext?: boolean | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}
