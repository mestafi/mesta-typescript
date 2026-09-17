
export interface UploadDocumentsResponse {
    data?: UploadDocumentsResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace UploadDocumentsResponse {
    export interface Data {
        /** Unique identifier for the uploaded document */
        id?: string | undefined;
        /** Original name of the uploaded file */
        fileName?: string | undefined;
        /** Type of the uploaded document */
        type?: Data.Type | undefined;
        /** Storage key for the uploaded document */
        s3Key?: string | undefined;
        /** URL to access the uploaded document */
        url?: string | undefined;
    }

    export namespace Data {
        /** Type of the uploaded document */
        export const Type = {
            AddressProof: "address_proof",
            BusinessRegistrationProof: "business_registration_proof",
            FiRegistrationProof: "fi_registration_proof",
            DirectorsRegistry: "directors_registry",
        } as const;
        export type Type = (typeof Type)[keyof typeof Type];
    }
}
