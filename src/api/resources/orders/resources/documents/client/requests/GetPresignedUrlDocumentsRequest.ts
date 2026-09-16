
/**
 * @example
 *     {
 *         orderId: "orderId",
 *         documentId: "documentId"
 *     }
 */
export interface GetPresignedUrlDocumentsRequest {
    /** ID of the order */
    orderId: string;
    /** ID of the document */
    documentId: string;
}
