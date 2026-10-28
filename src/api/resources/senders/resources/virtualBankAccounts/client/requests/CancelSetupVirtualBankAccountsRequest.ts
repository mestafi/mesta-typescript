
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         senderId: "senderId",
 *         currency: "USD"
 *     }
 */
export interface CancelSetupVirtualBankAccountsRequest {
    senderId: string;
    currency: Mesta.senders.CancelSetupVirtualBankAccountsRequestCurrency;
}
