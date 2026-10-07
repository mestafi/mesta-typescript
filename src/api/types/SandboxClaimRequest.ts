
export interface SandboxClaimRequest {
    /** The token from the fragment of `claimUrl`. */
    token: string;
    email: string;
    /** One to 64 Unicode letters or decimal digits, spaces, or . & ' -; no trailing newline. The server validates Unicode code points. */
    fullName: string;
    /** 12 to 128 characters; common passwords are refused. */
    password: string;
    /** Must be true; 422 with the terms URL and version otherwise. */
    acceptTerms: boolean;
    /** Keep the pre-claim keys, their webhook endpoints and signing key together. Otherwise revoke the keys, delete the endpoints, rotate the signing key, recreate the Mesta test endpoint and return one fresh pair once. */
    keepPreClaimKeys?: boolean | undefined;
}
