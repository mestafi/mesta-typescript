
/**
 * @example
 *     {
 *         senderId: "877157e3-5433-4a17-b89e-92bb2709fc44",
 *         beneficiarySenderId: "3f1f8dcb-42a5-4c46-a41b-2f7f2f6a9f10",
 *         acceptedQuoteId: "ad0d23ef-8482-47a1-bb08-d2556f4347e5"
 *     }
 */
export interface CreateTransfersRequest {
    /** Identifier of the source sender whose USD balance funds the transfer */
    senderId: string;
    /** Identifier of the recipient sender. Must belong to the same merchant and be different from senderId */
    beneficiarySenderId: string;
    /** Identifier of the internal quote (created with transferType "internal") to execute. A quote can fund at most one transfer and must be used before it expires */
    acceptedQuoteId: string;
}
