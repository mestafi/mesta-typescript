
/**
 * @example
 *     {
 *         senderId: "senderId",
 *         fileName: "fileName",
 *         type: "",
 *         blob: "blob"
 *     }
 */
export interface UploadDocumentsRequest {
    /** Unique identifier for the sender */
    senderId: string;
    /** The name of the file. */
    fileName: string;
    /** The document type. Use directors_registry for each Directors' and shareholders' registry file. */
    type: UploadDocumentsRequest.Type;
    /** Base64 encoded document content. */
    blob: string;
}

export namespace UploadDocumentsRequest {
    /** The document type. Use directors_registry for each Directors' and shareholders' registry file. */
    export const Type = {
        Empty: "",
        BusinessRegistrationProof: "business_registration_proof",
        AddressProof: "address_proof",
        FiRegistrationProof: "fi_registration_proof",
        DirectorsRegistry: "directors_registry",
    } as const;
    export type Type = (typeof Type)[keyof typeof Type];
}
