
import type * as Mesta from "../../../index.js";

export interface GetSendersResponse {
    data: GetSendersResponse.Data;
    /** Unique identifier for the API request */
    requestId: number;
}

export namespace GetSendersResponse {
    export interface Data {
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
        addresses?: Data.Addresses.Item[] | undefined;
        /** Identifier of the associated merchant */
        merchantId?: string | undefined;
        /** Know Your Business verification information */
        kyb?: (Data.Kyb | null) | undefined;
        /** Know Your Customer verification information */
        kyc?: Data.Kyc | undefined;
        /** Indicates whether the sender is currently active or inactive. */
        status?: Data.Status | undefined;
        /** Business website URL */
        websiteUrl?: (string | null) | undefined;
        /** Business identification number */
        identificationNumber?: (string | null) | undefined;
        onboardingInfo?: Mesta.SenderOnboardingInfo | undefined;
        /** List of KYB/KYC documents */
        documents?: Data.Documents.Item[] | undefined;
        /** Additional metadata about the sender */
        metadata?: (Record<string, unknown> | null) | undefined;
        /** Type of sender */
        type?: Data.Type | undefined;
        /** Identity verification information (for individual senders) */
        identity?: Data.Identity | undefined;
        /** Business registration date in ISO 8601 format */
        registrationDate?: (string | null) | undefined;
        /** Type of business entity */
        businessType?: (Data.BusinessType | null) | undefined;
        ubo?: Data.Ubo.Item[] | undefined;
        /** Directors and authorized representatives associated with the sender. */
        senderAssociate?: Mesta.SenderAssociate[] | undefined;
        /** List of deposit wallet addresses */
        depositWalletAddresses?: Data.DepositWalletAddresses.Item[] | undefined;
        /** Middle name of an individual sender */
        middleName?: (string | null) | undefined;
        /** Gender of an individual sender */
        gender?: (Data.Gender | null) | undefined;
        /** Occupation of an individual sender */
        occupation?: (string | null) | undefined;
        /** Terms of Service status for the sender */
        tos?: (Data.Tos | null) | undefined;
        /** Fiat deposit bank accounts assigned to this sender */
        depositBankAccounts?: Data.DepositBankAccounts.Item[] | undefined;
    }

    export namespace Data {
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
            /** Two-letter country code of the identity document */
            countryCode?: string | undefined;
            /** Type of identity document */
            documentType?: Identity.DocumentType | undefined;
            /** Identity document number */
            documentNumber?: string | undefined;
            /** Issue date of the identity document (YYYY-MM-DD) */
            issueDate?: (string | null) | undefined;
            /** Expiry date of the identity document (YYYY-MM-DD) */
            expiryDate?: (string | null) | undefined;
            /** Front side of the identity document */
            documentFront?: Identity.DocumentFront | undefined;
            /** Back side of the identity document */
            documentBack?: Identity.DocumentBack | undefined;
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
            }
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
        export type Ubo = Ubo.Item[];

        export namespace Ubo {
            /**
             * Ultimate Beneficial Owner information
             */
            export interface Item {
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
                /** Ownership percentage of the UBO in the company */
                ownershipPercent?: (number | null) | undefined;
                /** Address information of the UBO */
                address?: Item.Address | undefined;
                /** Identity verification information */
                identity?: Item.Identity | undefined;
                /** Identifier of the associated sender */
                senderId?: string | undefined;
                /** Know Your Customer verification information */
                kyc?: Item.Kyc | undefined;
                /** UBO nationality as an ISO 3166-1 alpha-2 country code. */
                nationality?: (string | null) | undefined;
                /** Tax identification number for the UBO. */
                identificationNumber?: (string | null) | undefined;
                /** Whether the UBO is politically exposed. */
                pepDeclaration?: boolean | undefined;
                /** PEP questionnaire details. Present when `pepDeclaration` is true. */
                pepQuestionnaire?: (Item.PepQuestionnaire | null) | undefined;
                /** Additional UBO documents stored for compliance review. */
                documents?: Item.Documents.Item[] | undefined;
            }

            export namespace Item {
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

                /**
                 * PEP questionnaire details. Present when `pepDeclaration` is true.
                 */
                export interface PepQuestionnaire {
                    /** Type of PEP declaration. */
                    declarationType?: PepQuestionnaire.DeclarationType | undefined;
                    /** Required when declarationType is SELF. */
                    self?: (PepQuestionnaire.Self | null) | undefined;
                    /** Required when declarationType is IMMEDIATE_FAMILY or CLOSE_ASSOCIATE. */
                    association?: (PepQuestionnaire.Association | null) | undefined;
                }

                export namespace PepQuestionnaire {
                    /** Type of PEP declaration. */
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
            }
        }

        export type DepositWalletAddresses = DepositWalletAddresses.Item[];

        export namespace DepositWalletAddresses {
            export interface Item {
                /** Unique identifier for the wallet address */
                id?: string | undefined;
                /** Version number of the record */
                version?: number | undefined;
                /** Creation timestamp */
                createdAt?: string | undefined;
                /** Last update timestamp */
                updatedAt?: string | undefined;
                /** The blockchain address */
                address?: string | undefined;
                /** The blockchain network */
                chain?: string | undefined;
                /** Associated merchant ID */
                merchantId?: string | undefined;
            }
        }

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

        export type DepositBankAccounts = DepositBankAccounts.Item[];

        export namespace DepositBankAccounts {
            export interface Item {
                /** Account holder address */
                address?: string | undefined;
                /** Bank account number or IBAN */
                accountNumber?: string | undefined;
                /** Currency of the bank account (e.g. EUR, GBP) */
                currency?: string | undefined;
                /** Banking provider */
                provider?: string | undefined;
                /** Account holder name */
                name?: string | undefined;
                /** BIC/SWIFT code */
                bic?: (string | null) | undefined;
                bankDetails?: Item.BankDetails | undefined;
                /** Sort code (for GBP accounts) */
                sortCode?: (string | null) | undefined;
                /** Payment reference for the deposit */
                reference?: string | undefined;
                /** Routing details for the bank account */
                routingDetails?: Item.RoutingDetails.Item[] | undefined;
            }

            export namespace Item {
                export interface BankDetails {
                    /** Bank name */
                    name?: string | undefined;
                    /** Bank address */
                    address?: string | undefined;
                }

                export type RoutingDetails = RoutingDetails.Item[];

                export namespace RoutingDetails {
                    export interface Item {
                        /** Routing number */
                        routingNumber?: string | undefined;
                        /** Transfer type (e.g., wire, ach) */
                        transferType?: string | undefined;
                    }
                }
            }
        }
    }
}
