
export interface GetPresignedUrlDocumentsResponse {
    data?: GetPresignedUrlDocumentsResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace GetPresignedUrlDocumentsResponse {
    export interface Data {
        /** Pre-signed S3 URL for downloading the document */
        url?: string | undefined;
        /** Original file name of the document */
        fileName?: string | undefined;
        /** Type of the document, as the request for information that collected it named the item */
        type?: string | undefined;
        /** Base64 encoded file content. The whole file travels in the answer beside the link, so a large document makes a large response. */
        blob?: string | undefined;
        /** Number of seconds until the URL expires */
        expiresIn?: number | undefined;
    }
}
