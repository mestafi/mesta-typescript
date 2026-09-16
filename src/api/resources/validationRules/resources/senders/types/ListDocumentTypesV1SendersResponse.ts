
export interface ListDocumentTypesV1SendersResponse {
    data?: ListDocumentTypesV1SendersResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace ListDocumentTypesV1SendersResponse {
    export interface Data {
        /** Unique identifier for the document rules */
        id?: string | undefined;
        /** Version number of the rules */
        version?: number | undefined;
        /** Timestamp when the rules were created (ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ) */
        createdAt?: string | undefined;
        /** Timestamp when the rules were last updated (ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ) */
        updatedAt?: string | undefined;
        /** Timestamp when the rules were deleted, if applicable (ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ) */
        deletedAt?: (string | null) | undefined;
        /** Identifier of the user who created the rules */
        createdBy?: string | undefined;
        /** Identifier of the user who last updated the rules */
        updatedBy?: string | undefined;
        /** Identifier of the user who deleted the rules */
        deletedBy?: (string | null) | undefined;
        /** Type of entity these rules apply to */
        owner?: Data.Owner | undefined;
        /** Must be 'business' for document requirements */
        ownerType?: Data.OwnerType | undefined;
        /** Two-letter country code (ISO 3166-1 alpha-2) */
        country?: string | undefined;
        rules?: Data.Rules | undefined;
    }

    export namespace Data {
        /** Type of entity these rules apply to */
        export const Owner = {
            Sender: "sender",
        } as const;
        export type Owner = (typeof Owner)[keyof typeof Owner];
        /** Must be 'business' for document requirements */
        export const OwnerType = {
            Individual: "individual",
            Business: "business",
        } as const;
        export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType];

        export interface Rules {
            /** List of required documents for business verification */
            requiredDocuments?: Rules.RequiredDocuments.Item[] | undefined;
        }

        export namespace Rules {
            export type RequiredDocuments = RequiredDocuments.Item[];

            export namespace RequiredDocuments {
                export interface Item {
                    /** Type identifier for the required document */
                    type: Item.Type;
                    /** Human-readable description of the required document */
                    description: string;
                }

                export namespace Item {
                    /** Type identifier for the required document */
                    export const Type = {
                        BusinessRegistrationProof: "business_registration_proof",
                        AddressProof: "address_proof",
                    } as const;
                    export type Type = (typeof Type)[keyof typeof Type];
                }
            }
        }
    }
}
