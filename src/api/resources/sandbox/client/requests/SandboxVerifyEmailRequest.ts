
/**
 * @example
 *     {
 *         id: "id",
 *         code: "123456"
 *     }
 */
export interface SandboxVerifyEmailRequest {
    /** The sandbox id. */
    id: string;
    /** The six-digit code from the email. Valid ten minutes; void after five wrong attempts. */
    code: string;
}
