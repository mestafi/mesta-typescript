
export interface SpeiInfo {
    /** Target name */
    targetName: string;
    /** Target last name */
    targetLastName?: (string | null) | undefined;
    /** Target email address */
    targetEmail?: (string | null) | undefined;
    /** Target identification document */
    targetDocument?: (string | null) | undefined;
    /** CLABE Number */
    targetBankAccountId: string;
    /** Name of the target bank */
    targetBankName?: (string | null) | undefined;
    /** Code of the target bank */
    targetBankCode?: (string | null) | undefined;
    /** Branch ID of the target bank */
    targetBankBranchId?: (string | null) | undefined;
    /** Unique identifier of the target bank */
    targetBankId?: (string | null) | undefined;
}
