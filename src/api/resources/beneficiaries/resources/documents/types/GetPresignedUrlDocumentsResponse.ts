
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
        /** Type of the document */
        type?: Data.Type | undefined;
        /** Number of seconds until the URL expires */
        expiresIn?: number | undefined;
    }

    export namespace Data {
        /** Type of the document */
        export const Type = {
            Identity: "identity",
            Business: "business",
        } as const;
        export type Type = (typeof Type)[keyof typeof Type];
    }
}
