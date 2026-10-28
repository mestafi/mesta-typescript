
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         id: "id",
 *         documentId: "documentId",
 *         type: "merchant"
 *     }
 */
export interface GetPresignedUrlDocumentsRequest {
    /** ID of the merchant */
    id: string;
    /** ID of the document */
    documentId: string;
    /** Which store the document lives in: the merchant's own KYB documents, or a UBO's identity documents. */
    type: Mesta.merchants.GetPresignedUrlDocumentsRequestType;
}
