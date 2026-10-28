
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface UpdateUbosRequest {
    /** Unique identifier of the UBO */
    id: string;
    /** First name of the UBO */
    firstName?: string;
    /** Last name of the UBO */
    lastName?: string;
    /** Birth date of the UBO */
    birthDate?: string;
    /** Email address of the UBO */
    email?: string;
    /** Phone number of the UBO in international format (e.g., +11234567890) */
    phone?: string;
    /** UBO nationality as an ISO 3166-1 alpha-2 country code. This is distinct from residence and identity-document country. */
    nationality?: string;
    /** Tax identification number for the UBO. Required for a non-US UBO when `usd_account` is requested. */
    identificationNumber?: string;
    /** Percentage of the sender owned by this UBO. */
    ownershipPercent?: number;
    address?: Mesta.Address;
    identity?: UpdateUbosRequest.Identity;
    /** Optional base64 encoded verification report document. */
    verificationReport?: string;
    /** Optional file name for the verification report. */
    verificationReportFileName?: string;
    /** Whether the UBO is politically exposed. */
    pepDeclaration?: boolean;
    /** Base64 encoded source-of-funds document. Required when the UBO is younger than 25 or older than 60, when `pepDeclaration` is `true`, or when either `address.country` or `identity.countryCode` is one of: `DZ`, `AO`, `BO`, `BG`, `BF`, `CM`, `CI`, `ET`, `HT`, `IQ`, `KE`, `LA`, `LB`, `ML`, `MC`, `MZ`, `NA`, `NP`, `NI`, `NG`, `SO`, `SY`, `VN`, `VG`, `YE`. */
    sofDocument?: string;
    /** Required when `pepDeclaration` is true. Contains declarationType with conditional `self` or `association` sections. */
    pepQuestionnaire?: UpdateUbosRequest.PepQuestionnaire | null;
}

export namespace UpdateUbosRequest {
    export interface Identity {
        /** Type of identity document */
        documentType?: Identity.DocumentType | undefined;
        /** Country code of the identity document */
        countryCode?: string | undefined;
        /** Document identification number */
        documentNumber?: string | undefined;
        /** Base64 encoded front image of identity document */
        documentFront?: string | undefined;
        /** Base64 encoded back image of identity document */
        documentBack?: string | undefined;
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
            pepCategory: Self.PepCategory;
            exactJobTitle: string;
            organizationOrGovermentBranch: string;
            /** ISO 3166-1 alpha-2 country code. */
            jurisdiction: string;
            /** Date in the format YYYY-MM-DD. */
            tenureStartDate: string;
            /** Date in the format YYYY-MM-DD. */
            tenureEndDate: string;
            sourceOfWealth: string;
            sourceOfFunds: string;
            estimatedAnnualIncomeUsd: number;
            totalEstimatedNetWorthUsd: number;
            accuracyStatementAccepted: boolean;
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
            pepFullName: string;
            relationship: string;
            pepJobTitle: string;
            /** ISO 3166-1 alpha-2 country code. */
            pepCountryOrJurisdiction: string;
            /** Date in the format YYYY-MM-DD. */
            serviceStartDate: string;
            /** Date in the format YYYY-MM-DD. */
            serviceEndDate: string;
            sourceOfWealth: string;
            totalEstimatedNetWorthUsd: number;
            accuracyStatementAccepted: boolean;
        }
    }
}
