
/**
 * @example
 *     {
 *         name: "name",
 *         permissions: ["permissions"]
 *     }
 */
export interface CreateApiKeysRequest {
    /** Human-readable name for the API key */
    name: string;
    /** List of permissions to grant to this API key */
    permissions: string[];
}
