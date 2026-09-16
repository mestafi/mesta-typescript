
/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface UpdateApiKeysRequest {
    /** ID of the API key */
    id: string;
    /** Updated name for the API key */
    name?: string;
    /** Updated list of permissions */
    permissions?: string[];
}
