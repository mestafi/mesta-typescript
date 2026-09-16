
/**
 * @example
 *     {
 *         id: "id",
 *         sourceWalletAddressId: "sourceWalletAddressId"
 *     }
 */
export interface DeleteSourceWalletAddressesRequest {
    /** ID of the sender */
    id: string;
    /** ID of the source wallet address to delete */
    sourceWalletAddressId: string;
}
