
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         senderId: "senderId",
 *         currency: "USD"
 *     }
 */
export interface GetSetupStatusVirtualBankAccountsRequest {
    senderId: string;
    currency: Mesta.senders.GetSetupStatusVirtualBankAccountsRequestCurrency;
}
