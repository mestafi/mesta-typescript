
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         senderId: "senderId",
 *         currency: "USD"
 *     }
 */
export interface RequestSetupVirtualBankAccountsRequest {
    senderId: string;
    currency: Mesta.senders.RequestSetupVirtualBankAccountsRequestCurrency;
}
