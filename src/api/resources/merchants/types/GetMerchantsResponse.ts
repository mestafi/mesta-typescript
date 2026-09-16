
export interface GetMerchantsResponse {
    data?: GetMerchantsResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace GetMerchantsResponse {
    export interface Data {
        /** Unique identifier for the merchant */
        id?: string | undefined;
        /** Version number of the merchant record */
        version?: number | undefined;
        /** Timestamp when the merchant was created */
        createdAt?: string | undefined;
        /** Timestamp when the merchant was last updated */
        updatedAt?: string | undefined;
        /** Business name of the merchant */
        name?: string | undefined;
        /** Primary email address for the merchant */
        email?: string | undefined;
        /** Phone number in E.164 format */
        phone?: string | undefined;
        /** Tax identification number */
        taxId?: (string | null) | undefined;
        /** Merchant's website URL */
        website?: (string | null) | undefined;
        /** Current status of the merchant account */
        status?: Data.Status | undefined;
        /** Know Your Business verification information */
        kyb?: Data.Kyb | undefined;
        /** Merchant's business address information */
        address?: Data.Address | undefined;
        /** Ultimate Beneficial Owner information */
        ubo?: (Data.Ubo | null) | undefined;
        /** List of deposit wallet addresses associated with the merchant */
        depositWalletAddresses?: (string[] | null) | undefined;
        /** Secret key for verifying webhook signatures */
        webhookSignatureKey?: string | undefined;
        /** Timestamp when the merchant accepted the terms of service */
        termsAcceptedAt?: (string | null) | undefined;
        /** User ID who accepted the terms of service */
        termsAcceptedBy?: (string | null) | undefined;
        /** IP address from which the terms were accepted */
        termsAcceptedIp?: (string | null) | undefined;
        /** Source of deposits for the merchant (e.g., 'sender') */
        depositSource?: (string | null) | undefined;
        /** Fiat deposit bank accounts assigned to this merchant */
        depositBankAccounts?: Record<string, unknown>[] | undefined;
    }

    export namespace Data {
        /** Current status of the merchant account */
        export const Status = {
            Active: "active",
            Inactive: "inactive",
            Created: "created",
        } as const;
        export type Status = (typeof Status)[keyof typeof Status];

        /**
         * Know Your Business verification information
         */
        export interface Kyb {
            /** KYB verification status */
            status?: Kyb.Status | undefined;
            /** Timestamp of the last KYB status update */
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
         * Merchant's business address information
         */
        export interface Address {
            /** Unique identifier for the address */
            id?: string | undefined;
            /** Version number of the address record */
            version?: number | undefined;
            /** Timestamp when the address was created */
            createdAt?: string | undefined;
            /** Timestamp when the address was last updated */
            updatedAt?: string | undefined;
            /** Street address line 1 */
            street?: string | undefined;
            /** Street address line 2 */
            street2?: (string | null) | undefined;
            /** City name */
            city?: string | undefined;
            /** State/province code */
            state?: string | undefined;
            /** Postal/ZIP code */
            postalCode?: string | undefined;
            /** Two-letter ISO country code */
            country?: string | undefined;
            /** Reference to the merchant */
            merchantId?: string | undefined;
        }

        /**
         * Ultimate Beneficial Owner information
         */
        export interface Ubo {
            /** Unique identifier for the UBO */
            id?: string | undefined;
            /** Version number of the UBO record */
            version?: number | undefined;
            /** Timestamp when the UBO record was created */
            createdAt?: string | undefined;
            /** Timestamp when the UBO record was last updated */
            updatedAt?: string | undefined;
            /** First name of the UBO */
            firstName?: string | undefined;
            /** Last name of the UBO */
            lastName?: string | undefined;
            /** Email address of the UBO */
            email?: string | undefined;
            /** Reference to the merchant */
            merchantId?: string | undefined;
            /** Percentage of ownership */
            ownershipPercent?: number | undefined;
            /** Identification number of the UBO */
            identificationNumber?: (string | null) | undefined;
            /** Birth date of the UBO */
            birthDate?: (string | null) | undefined;
        }
    }
}
