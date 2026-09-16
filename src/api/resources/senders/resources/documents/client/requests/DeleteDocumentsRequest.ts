
/**
 * @example
 *     {
 *         senderId: "senderId",
 *         documentId: "documentId"
 *     }
 */
export interface DeleteDocumentsRequest {
    /** Unique identifier for the sender */
    senderId: string;
    /** Unique identifier for the document to be deleted */
    documentId: string;
}
