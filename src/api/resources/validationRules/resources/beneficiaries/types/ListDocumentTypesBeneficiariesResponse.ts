
export interface ListDocumentTypesBeneficiariesResponse {
    data?: ListDocumentTypesBeneficiariesResponse.Data | undefined;
    /** Unique identifier for tracking the request */
    requestId?: number | undefined;
}

export namespace ListDocumentTypesBeneficiariesResponse {
    export interface Data {
        /** Unique identifier for the rule set */
        id?: string | undefined;
        /** Version number of the rules */
        version?: number | undefined;
        /** Timestamp when the rules were created */
        createdAt?: string | undefined;
        /** Timestamp when the rules were last updated */
        updatedAt?: string | undefined;
        /** Timestamp if rules are deleted, null otherwise */
        deletedAt?: (string | null) | undefined;
        /** ID of user who created the rules */
        createdBy?: string | undefined;
        /** ID of user who last updated the rules */
        updatedBy?: string | undefined;
        /** ID of user who deleted the rules */
        deletedBy?: (string | null) | undefined;
        /** Entity type these rules apply to */
        owner?: Data.Owner | undefined;
        /** Type of owner these rules apply to */
        ownerType?: Data.OwnerType | undefined;
        /** Country code these rules apply to */
        country?: string | undefined;
        rules?: Data.Rules | undefined;
    }

    export namespace Data {
        /** Entity type these rules apply to */
        export const Owner = {
            Beneficiary: "beneficiary",
        } as const;
        export type Owner = (typeof Owner)[keyof typeof Owner];
        /** Type of owner these rules apply to */
        export const OwnerType = {
            Individual: "individual",
            Business: "business",
        } as const;
        export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType];

        export interface Rules {
            /** List of required documents (may be empty for some countries) */
            requiredDocuments?: Rules.RequiredDocuments.Item[] | undefined;
        }

        export namespace Rules {
            export type RequiredDocuments = RequiredDocuments.Item[];

            export namespace RequiredDocuments {
                export interface Item {
                    type?: string | undefined;
                    description?: string | undefined;
                }
            }
        }
    }
}
