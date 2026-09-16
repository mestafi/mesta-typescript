
import type * as Mesta from "../../../../../index.js";

export interface ListStablecoinDepositsResponse {
    data?: Mesta.StablecoinDeposit[] | undefined;
    /** Total number of stablecoin deposits matching the query */
    total?: number | undefined;
    /** Whether there are more results available */
    hasNext?: boolean | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}
