
import type * as Mesta from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface ListSendersRequest {
    /** Filter senders by specific ID */
    id?: string;
    /** Filter senders by account status; kyc.status or kyb.status reports verification separately */
    status?: Mesta.ListSendersRequestStatus;
    /** Filter senders by verification status: kyc.status for individuals, kyb.status for businesses */
    verificationStatus?: Mesta.ListSendersRequestVerificationStatus;
    /** Records per page */
    pageSize?: number;
    /** Page number */
    page?: number;
    /** Sort column */
    sortBy?: Mesta.ListSendersRequestSortBy;
    /** Sort order */
    sortOrder?: Mesta.ListSendersRequestSortOrder;
}
