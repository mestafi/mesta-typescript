
export interface CreateQuotesResponse {
    data?: CreateQuotesResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace CreateQuotesResponse {
    export interface Data {
        /** Unique identifier for the quote */
        id?: string | undefined;
        /** Version number of the quote record */
        version?: number | undefined;
        /** Timestamp when the quote was created */
        createdAt?: string | undefined;
        /** Timestamp when the quote was last updated */
        updatedAt?: string | undefined;
        /** Identifier of the associated merchant */
        merchantId?: string | undefined;
        /** Source currency code */
        sourceCurrency?: string | undefined;
        /** Target currency code */
        targetCurrency?: string | undefined;
        /** Gross amount in source currency (before fees) */
        grossSourceAmount?: string | undefined;
        /** Developer fee amount in source currency */
        developerFee?: string | undefined;
        /** Amount in target currency */
        targetAmount?: string | undefined;
        /** Type of transfer */
        transferType?: (Data.TransferType | null) | undefined;
        /** Timestamp when the quote expires */
        expiresAt?: string | undefined;
        /** Current status of the quote */
        status?: Data.Status | undefined;
        /** Notes about the quote, e.g. flat fee information */
        notes?: string | undefined;
        /** Reason for quote failure, if applicable */
        failureReason?: string | undefined;
        /** Whether a Foreign Inward Remittance Certificate (FIRC) was requested for this quote. Only honoured when targetCurrency is INR. */
        fircRequired?: boolean | undefined;
    }

    export namespace Data {
        /** Type of transfer */
        export const TransferType = {
            Ach: "ach",
            Rtp: "rtp",
            Swift: "swift",
            Wire: "wire",
            Internal: "internal",
        } as const;
        export type TransferType = (typeof TransferType)[keyof typeof TransferType];
        /** Current status of the quote */
        export const Status = {
            Created: "created",
            Executed: "executed",
            Expired: "expired",
            Active: "active",
            Processing: "processing",
            Failed: "failed",
        } as const;
        export type Status = (typeof Status)[keyof typeof Status];
    }
}
