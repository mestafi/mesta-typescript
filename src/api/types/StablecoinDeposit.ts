
/**
 * Stablecoin deposit object for merchant access
 */
export interface StablecoinDeposit {
    /** Unique identifier for the deposit */
    id: string;
    /** Deposit amount (decimal with 2 decimal places) */
    amount: string;
    /** The stablecoin token and chain, e.g. USDC_ETH, USDT_TRX, USDC_SOL */
    currency: string;
    /** Associated transaction ID */
    transactionId?: string | undefined;
    /** Merchant ID */
    merchantId: string;
    /** Sender ID. null for pooled merchant account deposits — merchant-level top-ups carry no sender attribution. */
    senderId?: (string | null) | undefined;
    /** Source blockchain wallet address */
    sourceWalletAddress: string;
    /** Destination wallet address ID */
    depositWalletAddressId: string;
    /** Creation timestamp */
    createdAt?: string | undefined;
    /** Last update timestamp */
    updatedAt?: string | undefined;
    /** Current status of the stablecoin deposit */
    status?: StablecoinDeposit.Status | undefined;
}

export namespace StablecoinDeposit {
    /** Current status of the stablecoin deposit */
    export const Status = {
        Created: "created",
        ComplianceReviewRequired: "compliance_review_required",
        ComplianceReviewSucceeded: "compliance_review_succeeded",
        ComplianceReviewFailed: "compliance_review_failed",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
}
