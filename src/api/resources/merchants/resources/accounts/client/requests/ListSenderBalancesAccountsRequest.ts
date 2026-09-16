
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         currency: "USD"
 *     }
 */
export interface ListSenderBalancesAccountsRequest {
    /** Filter balances by currency code */
    currency: Mesta.merchants.ListSenderBalancesAccountsRequestCurrency;
}
