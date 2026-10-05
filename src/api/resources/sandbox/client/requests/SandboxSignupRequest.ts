
/**
 * @example
 *     {
 *         turnstileToken: "turnstileToken",
 *         email: "email",
 *         fullName: "Example Developer",
 *         password: "password",
 *         country: "US",
 *         acceptTerms: true
 *     }
 */
export interface SandboxSignupRequest {
    /** Optional sign-up entry point. */
    from?: SandboxSignupRequest.From;
    /** The Cloudflare Turnstile token from the form. */
    turnstileToken: string;
    email: string;
    /** One to 64 Unicode letters or decimal digits, spaces, or . & ' -; no trailing newline. The server validates Unicode code points. */
    fullName: string;
    /** 12 to 128 characters; common passwords are refused. */
    password: string;
    country: string;
    /** Must be true. */
    acceptTerms: boolean;
}

export namespace SandboxSignupRequest {
    /** Optional sign-up entry point. */
    export const From = {
        Docs: "docs",
        Site: "site",
        ReadmePage: "readme-page",
    } as const;
    export type From = (typeof From)[keyof typeof From];
}
