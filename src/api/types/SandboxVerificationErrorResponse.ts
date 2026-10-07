
/**
 * Wrong verification code. Request a new code when attemptsRemaining is zero; a resend voids the previous code and issues a new code with five attempts.
 */
export interface SandboxVerificationErrorResponse {
    error: SandboxVerificationErrorResponse.Error_;
    requestId: number;
}

export namespace SandboxVerificationErrorResponse {
    export interface Error_ {
        CODE: Error_.Code;
        MESSAGE: string;
        DETAILS: Error_.Details;
    }

    export namespace Error_ {
        export const Code = {
            VerificationCodeInvalid: "VERIFICATION_CODE_INVALID",
        } as const;
        export type Code = (typeof Code)[keyof typeof Code];

        export interface Details {
            attemptsRemaining: number;
        }
    }
}
