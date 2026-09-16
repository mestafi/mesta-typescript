
export interface GetPurposeOfPaymentPresignedUrlDocumentsResponse {
    /** Pre-signed S3 URL for downloading the document */
    url?: string | undefined;
    /** Original file name */
    fileName?: string | undefined;
    /** Document type */
    type?: string | undefined;
    /** Base64 encoded file content */
    blob?: string | undefined;
    /** URL expiry time in seconds */
    expiresIn?: number | undefined;
}
