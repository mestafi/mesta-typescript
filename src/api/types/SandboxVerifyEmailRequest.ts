
export interface SandboxVerifyEmailRequest {
    /** The six-digit code from the email. Valid ten minutes; void after five wrong attempts. */
    code: string;
}
