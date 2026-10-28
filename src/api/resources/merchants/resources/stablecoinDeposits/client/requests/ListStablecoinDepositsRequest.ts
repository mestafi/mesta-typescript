
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         search: "abc123",
 *         merchantId: "550e8400-e29b-41d4-a716-446655440000",
 *         senderId: "550e8400-e29b-41d4-a716-446655440001",
 *         sourceWalletAddress: "0x1234567890abcdef1234567890abcdef12345678",
 *         depositWalletAddressId: "550e8400-e29b-41d4-a716-446655440002"
 *     }
 */
export interface ListStablecoinDepositsRequest {
    /** Page number (0-indexed) */
    page?: number;
    /** Number of records per page */
    pageSize?: number;
    /** Sort column */
    sortBy?: Mesta.merchants.ListStablecoinDepositsRequestSortBy;
    /** Sort order */
    sortOrder?: Mesta.merchants.ListStablecoinDepositsRequestSortOrder;
    /** Search query */
    search?: string;
    /** Filter by stablecoin currency */
    currency?: Mesta.merchants.ListStablecoinDepositsRequestCurrency;
    /** Filter by merchant ID */
    merchantId?: string;
    /** Filter by sender ID */
    senderId?: string;
    /** Filter by deposit status */
    status?: Mesta.merchants.ListStablecoinDepositsRequestStatus;
    /** Filter by SWA risk level */
    swaRiskLevel?: Mesta.merchants.ListStablecoinDepositsRequestSwaRiskLevel;
    /** Filter by source wallet address */
    sourceWalletAddress?: string;
    /** Filter by deposit wallet address ID */
    depositWalletAddressId?: string;
    /** Optional. true returns only pooled merchant account deposits (merchant-level top-ups, no sender attribution); false returns only sender-attributed deposits; omit for all deposits. Pooled Merchant Accounts is available to select merchants only — please reach out to Mesta support to have it enabled for your account. */
    isPooled?: boolean;
}
