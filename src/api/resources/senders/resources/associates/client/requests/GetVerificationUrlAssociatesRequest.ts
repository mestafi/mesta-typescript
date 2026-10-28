
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         associateId: "associateId"
 *     }
 */
export interface GetVerificationUrlAssociatesRequest {
    associateId: string;
    action?: Mesta.senders.GetVerificationUrlAssociatesRequestAction;
}
