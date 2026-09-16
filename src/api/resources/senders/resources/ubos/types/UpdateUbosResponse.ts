
export interface UpdateUbosResponse {
    data?: UpdateUbosResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace UpdateUbosResponse {
    export interface Data {
        /** Unique identifier for the UBO */
        id?: string | undefined;
        /** Version number of the UBO record */
        version?: number | undefined;
        /** Timestamp when the UBO was created (ISO 8601 format) */
        createdAt?: string | undefined;
        /** Timestamp when the UBO was last updated (ISO 8601 format) */
        updatedAt?: string | undefined;
        /** Timestamp when the UBO was deleted (ISO 8601 format) */
        deletedAt?: (string | null) | undefined;
        /** Identifier of the user who created the UBO */
        createdBy?: string | undefined;
        /** Identifier of the user who last updated the UBO */
        updatedBy?: string | undefined;
        /** Identifier of the user who deleted the UBO */
        deletedBy?: (string | null) | undefined;
        /** First name of the UBO */
        firstName?: string | undefined;
        /** Last name of the UBO */
        lastName?: string | undefined;
        /** Date of birth in ISO 8601 format (YYYY-MM-DD) */
        birthDate?: (string | null) | undefined;
        /** Email address of the UBO */
        email?: string | undefined;
        /** Phone number in E.164 format */
        phone?: string | undefined;
        /** Address information of the UBO */
        address?: Data.Address | undefined;
        /** Identity verification information */
        identity?: Data.Identity | undefined;
        /** Identifier of the associated sender */
        senderId?: string | undefined;
        /** Know Your Customer verification information */
        kyc?: Data.Kyc | undefined;
        /** UBO nationality as an ISO 3166-1 alpha-2 country code. */
        nationality?: (string | null) | undefined;
        /** Tax identification number for the UBO. */
        identificationNumber?: (string | null) | undefined;
        /** Whether the UBO is politically exposed. */
        pepDeclaration?: boolean | undefined;
        /** Additional UBO documents stored for compliance review. */
        documents?: Data.Documents.Item[] | undefined;
        /** Required when `pepDeclaration` is true. Contains declarationType with conditional `self` or `association` sections. */
        pepQuestionnaire?: (Data.PepQuestionnaire | null) | undefined;
    }

    export namespace Data {
        /**
         * Address information of the UBO
         */
        export interface Address {
            /** Street address */
            street?: string | undefined;
            /** City name */
            city?: string | undefined;
            /** State/province code */
            state?: string | undefined;
            /** Two-letter country code */
            country?: string | undefined;
            /** Postal/ZIP code */
            postalCode?: string | undefined;
        }

        /**
         * Identity verification information
         */
        export interface Identity {
            /** Two-letter country code of the identity document */
            countryCode?: string | undefined;
            /** Identity document number */
            documentNumber?: string | undefined;
            /** Type of identity document */
            documentType?: Identity.DocumentType | undefined;
        }

        export namespace Identity {
            /** Type of identity document */
            export const DocumentType = {
                Passport: "PASSPORT",
                DriverLicense: "DRIVER_LICENSE",
                NationalId: "NATIONAL_ID",
                IdCard: "ID_CARD",
                ResidentCard: "RESIDENT_CARD",
                VoterId: "VOTER_ID",
                VisaDocument: "VISA_DOCUMENT",
                VoterIdCard: "VOTER_ID_CARD",
                GhanaCard: "GHANA_CARD",
                GhanaSsnitCard: "GHANA_SSNIT_CARD",
                GreenBook: "GREEN_BOOK",
                ZaGreenBook: "ZA_GREEN_BOOK",
                KenyaAlienCard: "KENYA_ALIEN_CARD",
                PanCard: "PAN_CARD",
                TaxId: "TAX_ID",
                Ssnit: "SSNIT",
                AlienCard: "ALIEN_CARD",
                KenyaKraPin: "KENYA_KRA_PIN",
                Bvn: "BVN",
                Nin: "NIN",
                Ssn4: "SSN4",
                Ssn9: "SSN9",
                ColombiaPpt: "COLOMBIA_PPT",
                GhanaCardNumber: "GHANA_CARD_NUMBER",
                NinSlip: "NIN_SLIP",
                ResidentId: "RESIDENT_ID",
            } as const;
            export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];
        }

        /**
         * Know Your Customer verification information
         */
        export interface Kyc {
            /** KYC verification status */
            status?: Kyc.Status | undefined;
            /** Timestamp of the last KYC status update (ISO 8601 format) */
            statusUpdatedAt?: string | undefined;
        }

        export namespace Kyc {
            /** KYC verification status */
            export const Status = {
                Unverified: "unverified",
                Pending: "pending",
                Approved: "approved",
                Declined: "declined",
            } as const;
            export type Status = (typeof Status)[keyof typeof Status];
        }

        export type Documents = Documents.Item[];

        export namespace Documents {
            export interface Item {
                id?: string | undefined;
                type?: Item.Type | undefined;
                url?: string | undefined;
                uploadedAt?: string | undefined;
            }

            export namespace Item {
                export const Type = {
                    SourceOfFunds: "source_of_funds",
                    VerificationReport: "verification_report",
                } as const;
                export type Type = (typeof Type)[keyof typeof Type];
            }
        }

        /**
         * Required when `pepDeclaration` is true. Contains declarationType with conditional `self` or `association` sections.
         */
        export interface PepQuestionnaire {
            /** PEP declaration type. */
            declarationType?: PepQuestionnaire.DeclarationType | undefined;
            /** Required when declarationType is SELF. */
            self?: (PepQuestionnaire.Self | null) | undefined;
            /** Required when declarationType is IMMEDIATE_FAMILY or CLOSE_ASSOCIATE. */
            association?: (PepQuestionnaire.Association | null) | undefined;
        }

        export namespace PepQuestionnaire {
            /** PEP declaration type. */
            export const DeclarationType = {
                Self: "SELF",
                ImmediateFamily: "IMMEDIATE_FAMILY",
                CloseAssociate: "CLOSE_ASSOCIATE",
            } as const;
            export type DeclarationType = (typeof DeclarationType)[keyof typeof DeclarationType];

            /**
             * Required when declarationType is SELF.
             */
            export interface Self {
                pepCategory?: Self.PepCategory | undefined;
                exactJobTitle?: string | undefined;
                organizationOrGovermentBranch?: string | undefined;
                jurisdiction?: string | undefined;
                tenureStartDate?: string | undefined;
                tenureEndDate?: string | undefined;
                sourceOfWealth?: string | undefined;
                sourceOfFunds?: string | undefined;
                estimatedAnnualIncomeUsd?: number | undefined;
                totalEstimatedNetWorthUsd?: number | undefined;
                accuracyStatementAccepted?: boolean | undefined;
            }

            export namespace Self {
                export const PepCategory = {
                    Domestic: "DOMESTIC",
                    Foreign: "FOREIGN",
                    InternationalOrganization: "INTERNATIONAL_ORGANIZATION",
                } as const;
                export type PepCategory = (typeof PepCategory)[keyof typeof PepCategory];
            }

            /**
             * Required when declarationType is IMMEDIATE_FAMILY or CLOSE_ASSOCIATE.
             */
            export interface Association {
                pepFullName?: string | undefined;
                relationship?: string | undefined;
                pepJobTitle?: string | undefined;
                pepCountryOrJurisdiction?: string | undefined;
                serviceStartDate?: string | undefined;
                serviceEndDate?: string | undefined;
                sourceOfWealth?: string | undefined;
                totalEstimatedNetWorthUsd?: number | undefined;
                accuracyStatementAccepted?: boolean | undefined;
            }
        }
    }
}
