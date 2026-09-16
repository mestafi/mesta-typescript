
/**
 * @example
 *     {
 *         email: "email",
 *         password: "password"
 *     }
 */
export interface MerchantLoginAuthRequest {
    /** Merchant user email address */
    email: string;
    /** Account password */
    password: string;
    /** Time-based one-time password for MFA (if MFA is enabled) */
    totp?: string;
}
