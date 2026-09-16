
/**
 * Purpose of payment document upload request
 */
export interface PurposeOfPaymentDocumentRequest {
    /** Name of the file */
    fileName: string;
    /** Base64 encoded file content (PNG, JPG, JPEG, or PDF) */
    blob: string;
}
