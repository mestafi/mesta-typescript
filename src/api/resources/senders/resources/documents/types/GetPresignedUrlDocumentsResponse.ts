
export interface GetPresignedUrlDocumentsResponse {
    data?: GetPresignedUrlDocumentsResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace GetPresignedUrlDocumentsResponse {
    export interface Data {
        /** Presigned URL for downloading the document */
        url?: string | undefined;
        /** Name of the document file */
        fileName?: string | undefined;
        /** Type of the document */
        type?: string | undefined;
        /** URL expiration time in seconds */
        expiresIn?: number | undefined;
    }
}
