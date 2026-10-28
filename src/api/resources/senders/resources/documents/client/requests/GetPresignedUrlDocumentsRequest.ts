
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         id: "id",
 *         documentId: "documentId"
 *     }
 */
export interface GetPresignedUrlDocumentsRequest {
    /** ID of the sender */
    id: string;
    /** ID of the document */
    documentId: string;
    /** Type of document to retrieve */
    type?: Mesta.senders.GetPresignedUrlDocumentsRequestType;
}
