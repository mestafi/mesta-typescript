
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         senderId: "senderId",
 *         currency: "USD"
 *     }
 */
export interface GetVirtualBankAccountsRequest {
    senderId: string;
    currency: Mesta.senders.GetVirtualBankAccountsRequestCurrency;
}
