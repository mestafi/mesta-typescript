
export interface SenderAssociateIdentityInput {
    countryCode: string;
    /** Supported values and front/back requirements depend on the identity country. */
    documentType: string;
    documentNumber: string;
    /** Base64 encoded front image of the identity document. */
    documentFront?: string | undefined;
    /** Base64 encoded back image of the identity document. */
    documentBack?: string | undefined;
}
