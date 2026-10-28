
import type * as Mesta from "../../../index.js";

export interface ListSendersResponse {
    /** List of senders */
    data?: ListSendersResponse.Data.Item[] | undefined;
    /** Total number of senders matching the query */
    total?: number | undefined;
    /** Indicates if there are more senders available for pagination */
    hasNext?: boolean | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace ListSendersResponse {
    export type Data = Data.Item[];

    export namespace Data {
        export interface Item {
            /** Unique identifier for the sender */
            id?: string | undefined;
            /** Version number of the sender record */
            version?: number | undefined;
            /** Timestamp when the sender was created (ISO 8601 format) */
            createdAt?: string | undefined;
            /** Timestamp when the sender was last updated (ISO 8601 format) */
            updatedAt?: string | undefined;
            /** Full name of the business or individual */
            fullName?: (string | null) | undefined;
            /** First name (for individual senders) */
            firstName?: (string | null) | undefined;
            /** Last name (for individual senders) */
            lastName?: (string | null) | undefined;
            /** Date of birth in ISO 8601 format (YYYY-MM-DD, for individual senders) */
            birthDate?: (string | null) | undefined;
            /** Email address of the sender */
            email?: string | undefined;
            /** Phone number in E.164 format */
            phone?: string | undefined;
            /** List of addresses associated with the sender */
            addresses?: Item.Addresses.Item[] | undefined;
            /** Identifier of the associated merchant */
            merchantId?: string | undefined;
            /** Know Your Business verification information */
            kyb?: (Item.Kyb | null) | undefined;
            /** Know Your Customer verification information */
            kyc?: Item.Kyc | undefined;
            /** Indicates whether the sender is currently active or inactive. */
            status?: Item.Status | undefined;
            /** Business website URL */
            websiteUrl?: (string | null) | undefined;
            /** Business identification number */
            identificationNumber?: (string | null) | undefined;
            onboardingInfo?: Mesta.SenderOnboardingInfo | undefined;
            /** List of KYB/KYC documents */
            documents?: Item.Documents.Item[] | undefined;
            /** Additional metadata about the sender */
            metadata?: (Record<string, unknown> | null) | undefined;
            /** Type of sender */
            type?: Item.Type | undefined;
            /** Identity verification information (for individual senders) */
            identity?: Item.Identity | undefined;
            /** Business registration date in ISO 8601 format */
            registrationDate?: (string | null) | undefined;
            /** Type of business entity */
            businessType?: (Item.BusinessType | null) | undefined;
            /** Middle name of an individual sender */
            middleName?: (string | null) | undefined;
            /** Gender of an individual sender */
            gender?: (Item.Gender | null) | undefined;
            /** Occupation of an individual sender */
            occupation?: (string | null) | undefined;
            /** Terms of Service status for the sender */
            tos?: (Item.Tos | null) | undefined;
        }

        export namespace Item {
            export type Addresses = Addresses.Item[];

            export namespace Addresses {
                export interface Item {
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
            }

            /**
             * Know Your Business verification information
             */
            export interface Kyb {
                /** KYB verification status */
                status?: Kyb.Status | undefined;
                /** Timestamp of the last KYB status update (ISO 8601 format) */
                statusUpdatedAt?: string | undefined;
            }

            export namespace Kyb {
                /** KYB verification status */
                export const Status = {
                    Unverified: "unverified",
                    Pending: "pending",
                    Approved: "approved",
                    Declined: "declined",
                } as const;
                export type Status = (typeof Status)[keyof typeof Status];
            }

            /**
             * Know Your Customer verification information
             */
            export interface Kyc {
                /** KYC verification status */
                status?: Kyc.Status | undefined;
                /** Timestamp of the last KYC status update */
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

            /** Indicates whether the sender is currently active or inactive. */
            export const Status = {
                Active: "active",
                Inactive: "inactive",
            } as const;
            export type Status = (typeof Status)[keyof typeof Status];
            export type Documents = Documents.Item[];

            export namespace Documents {
                export interface Item {
                    /** Document identifier */
                    id?: string | undefined;
                    /** Document URL */
                    url?: string | undefined;
                    /** Type of document */
                    type?: Item.Type | undefined;
                    /** Name of the document file */
                    fileName?: string | undefined;
                    /** Timestamp when the document was submitted (ISO 8601 format) */
                    submittedAt?: string | undefined;
                }

                export namespace Item {
                    /** Type of document */
                    export const Type = {
                        AddressProof: "address_proof",
                        BusinessRegistrationProof: "business_registration_proof",
                        FiRegistrationProof: "fi_registration_proof",
                        DirectorsRegistry: "directors_registry",
                    } as const;
                    export type Type = (typeof Type)[keyof typeof Type];
                }
            }

            /** Type of sender */
            export const Type = {
                Business: "business",
                Individual: "individual",
            } as const;
            export type Type = (typeof Type)[keyof typeof Type];

            /**
             * Identity verification information (for individual senders)
             */
            export interface Identity {
                /** Type of identity document */
                documentType?: Identity.DocumentType | undefined;
                /** Two-letter country code of the identity document */
                countryCode?: string | undefined;
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
            }

            /** Type of business entity */
            export const BusinessType = {
                SoleProprietorship: "sole_proprietorship",
                Partnership: "partnership",
                Corporation: "corporation",
                LimitedLiabilityCompany: "limited_liability_company",
                Other: "other",
            } as const;
            export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType];
            /** Gender of an individual sender */
            export const Gender = {
                Male: "male",
                Female: "female",
                Other: "other",
            } as const;
            export type Gender = (typeof Gender)[keyof typeof Gender];

            /**
             * Terms of Service status for the sender
             */
            export interface Tos {
                /** Current TOS acceptance status */
                status?: Tos.Status | undefined;
                /** When the TOS was accepted */
                acceptedAt?: string | undefined;
                /** Version of the TOS */
                version?: string | undefined;
                /** ID of the TOS agreement */
                agreementId?: string | undefined;
                /** TOS acceptance link details */
                link?: (Tos.Link | null) | undefined;
            }

            export namespace Tos {
                /** Current TOS acceptance status */
                export const Status = {
                    Pending: "pending",
                    Accepted: "accepted",
                    NotRequired: "not_required",
                } as const;
                export type Status = (typeof Status)[keyof typeof Status];

                /**
                 * TOS acceptance link details
                 */
                export interface Link {
                    /** URL for accepting TOS */
                    url?: string | undefined;
                    expiresAt?: string | undefined;
                    generatedAt?: string | undefined;
                    isExpired?: boolean | undefined;
                }
            }
        }
    }
}
