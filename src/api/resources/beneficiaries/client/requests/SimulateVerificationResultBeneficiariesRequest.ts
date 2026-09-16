
/**
 * @example
 *     {
 *         beneficiaryId: "beneficiaryId",
 *         result: "APPROVED"
 *     }
 */
export interface SimulateVerificationResultBeneficiariesRequest {
    /** Unique identifier for the beneficiary. */
    beneficiaryId: string;
    /** The verification outcome to simulate. */
    result: SimulateVerificationResultBeneficiariesRequest.Result;
}

export namespace SimulateVerificationResultBeneficiariesRequest {
    /** The verification outcome to simulate. */
    export const Result = {
        Approved: "APPROVED",
        Declined: "DECLINED",
    } as const;
    export type Result = (typeof Result)[keyof typeof Result];
}
