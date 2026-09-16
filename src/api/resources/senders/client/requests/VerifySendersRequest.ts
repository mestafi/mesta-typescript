
/**
 * @example
 *     {
 *         senderId: "senderId"
 *     }
 */
export interface VerifySendersRequest {
    /** Unique identifier for the sender. */
    senderId: string;
    /** Unique identifier for the Verify Sender request */
    requestId?: number;
}
