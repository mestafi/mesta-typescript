
import type * as Mesta from "../../../../index.js";

/**
 * @example
 *     {
 *         senderId: "senderId",
 *         body: {}
 *     }
 */
export interface UpdateSendersRequest {
    /** Unique identifier for the sender. */
    senderId: string;
    body: Mesta.UpdateSendersRequestBody;
}
