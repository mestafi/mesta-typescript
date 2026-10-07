
/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface UpdateApiKeysRequest {
    /** ID of the API key */
    id: string;
    /** From a portal session with api-key-rotate step-up: mint a new row and return its secret once. The predecessor retires after 24 hours with expires_with_sandbox=false; verification never revives it. */
    rotate?: boolean;
    /** Updated name for the API key */
    name?: string;
    /** Updated list of permissions */
    permissions?: string[];
}
