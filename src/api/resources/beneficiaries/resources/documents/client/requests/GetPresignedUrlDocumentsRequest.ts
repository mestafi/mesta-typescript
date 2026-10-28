
/**
 * @example
 *     {
 *         beneficiaryId: "beneficiaryId",
 *         documentId: "documentId"
 *     }
 */
export interface GetPresignedUrlDocumentsRequest {
    /** Unique identifier of the beneficiary */
    beneficiaryId: string;
    /** Unique identifier of the document */
    documentId: string;
}
