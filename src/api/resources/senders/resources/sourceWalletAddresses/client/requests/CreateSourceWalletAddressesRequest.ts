
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         id: "id",
 *         body: [{
 *                 address: "address",
 *                 chain: "chain"
 *             }]
 *     }
 */
export interface CreateSourceWalletAddressesRequest {
    /** ID of the sender */
    id: string;
    body: Mesta.SourceAddressInput[];
}
