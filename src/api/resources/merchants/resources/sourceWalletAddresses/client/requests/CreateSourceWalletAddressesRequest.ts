
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         merchantId: "merchantId",
 *         body: [{
 *                 address: "address",
 *                 chain: "chain"
 *             }]
 *     }
 */
export interface CreateSourceWalletAddressesRequest {
    /** ID of the merchant */
    merchantId: string;
    body: Mesta.SourceAddressInput[];
}
