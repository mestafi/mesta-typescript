
export interface GetUbosResponse {
    data: GetUbosResponse.Data;
    /** Unique identifier for the API request */
    requestId: number;
}

export namespace GetUbosResponse {
    export interface Data {
        /** Unique identifier for the UBO */
        id?: string | undefined;
        /** Version number of the UBO record */
        version?: number | undefined;
        /** Timestamp when the UBO was created (ISO 8601 format) */
        createdAt?: string | undefined;
        /** Timestamp when the UBO was last updated (ISO 8601 format) */
        updatedAt?: string | undefined;
        /** First name of the UBO */
        firstName?: string | undefined;
        /** Last name of the UBO */
        lastName?: string | undefined;
        /** Date of birth in ISO 8601 format (YYYY-MM-DD) */
        birthDate?: string | undefined;
        /** Email address of the UBO */
        email?: string | undefined;
        /** Phone number in E.164 format */
        phone?: string | undefined;
        /** Address information of the UBO */
        address?: Data.Address | undefined;
        /** Ownership percentage of the UBO in the company */
        ownershipPercent?: (number | null) | undefined;
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
        /** Associated sender information */
        sender?: Data.Sender | undefined;
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
            /** Type of identity document */
            documentType?: Identity.DocumentType | undefined;
            /** Front side of the identity document */
            documentFront?: Identity.DocumentFront | undefined;
            /** Back side of the identity document */
            documentBack?: Identity.DocumentBack | undefined;
            /** Identity document number */
            documentNumber?: string | undefined;
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

            /**
             * Front side of the identity document
             */
            export interface DocumentFront {
                /** URL to access the document front image */
                url?: string | undefined;
                /** Name of the document file */
                fileName?: string | undefined;
                /** Type of the identity document */
                fileType?: string | undefined;
                /** Unique identifier for the document */
                id?: string | undefined;
                /** Timestamp when the document was submitted */
                submittedAt?: string | undefined;
            }

            /**
             * Back side of the identity document
             */
            export interface DocumentBack {
                /** URL to access the document back image */
                url?: string | undefined;
                /** Name of the document file */
                fileName?: string | undefined;
                /** Type of the identity document */
                fileType?: string | undefined;
                /** Unique identifier for the document */
                id?: string | undefined;
                /** Timestamp when the document was submitted */
                submittedAt?: string | undefined;
            }
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
         * Associated sender information
         */
        export interface Sender {
            /** Sender ID */
            id?: string | undefined;
            version?: number | undefined;
            createdAt?: string | undefined;
            updatedAt?: string | undefined;
            fullName?: (string | null) | undefined;
            firstName?: (string | null) | undefined;
            middleName?: (string | null) | undefined;
            lastName?: (string | null) | undefined;
            birthDate?: (string | null) | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            gender?: (string | null) | undefined;
            occupation?: (string | null) | undefined;
            addresses?: Sender.Addresses.Item[] | undefined;
            merchantId?: string | undefined;
            kyb?: (Sender.Kyb | null) | undefined;
            kyc?: (Sender.Kyc | null) | undefined;
            status?: Sender.Status | undefined;
            type?: Sender.Type | undefined;
            websiteUrl?: (string | null) | undefined;
            identificationNumber?: (string | null) | undefined;
            documents?: Sender.Documents.Item[] | undefined;
            metadata?: (Record<string, unknown> | null) | undefined;
            identity?: (Record<string, unknown> | null) | undefined;
            registrationDate?: (string | null) | undefined;
            businessType?: (string | null) | undefined;
            tos?: (Sender.Tos | null) | undefined;
        }

        export namespace Sender {
            export type Addresses = Addresses.Item[];

            export namespace Addresses {
                export interface Item {
                    street?: string | undefined;
                    city?: string | undefined;
                    state?: string | undefined;
                    country?: string | undefined;
                    postalCode?: string | undefined;
                }
            }

            export interface Kyb {
                status?: string | undefined;
                statusUpdatedAt?: string | undefined;
            }

            export interface Kyc {
                status?: string | undefined;
                statusUpdatedAt?: string | undefined;
            }

            export const Status = {
                Active: "active",
                Inactive: "inactive",
            } as const;
            export type Status = (typeof Status)[keyof typeof Status];
            export const Type = {
                Business: "business",
                Individual: "individual",
            } as const;
            export type Type = (typeof Type)[keyof typeof Type];
            export type Documents = Documents.Item[];

            export namespace Documents {
                export interface Item {
                    /** Unique identifier for the document */
                    id?: string | undefined;
                    /** URL to access the document */
                    url?: string | undefined;
                    /** Type of the document */
                    type?: string | undefined;
                    /** Name of the document file */
                    fileName?: string | undefined;
                    /** Timestamp when the document was submitted */
                    submittedAt?: string | undefined;
                }
            }

            export interface Tos {
                status?: string | undefined;
            }
        }
    }
}
