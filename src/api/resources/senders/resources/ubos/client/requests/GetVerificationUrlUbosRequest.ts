
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface GetVerificationUrlUbosRequest {
    /** Unique identifier of the UBO */
    id: string;
    /** Optional action for selfie-link creation. Omit it to fetch the current session state only. Use `GENERATE` to create the first link when no session exists. Use `REGENERATE` only when the latest session is `DECLINED` or `EXPIRED`. */
    action?: Mesta.senders.GetVerificationUrlUbosRequestAction;
}
