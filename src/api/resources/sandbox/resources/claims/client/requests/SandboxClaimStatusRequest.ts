
/**
 * @example
 *     {
 *         token: "token"
 *     }
 */
export interface SandboxClaimStatusRequest {
    /** The token from the fragment of `claimUrl`. Sent in the body, never in the path. */
    token: string;
}
