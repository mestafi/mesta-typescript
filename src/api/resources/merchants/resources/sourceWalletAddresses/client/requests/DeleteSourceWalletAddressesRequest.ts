
/**
 * @example
 *     {
 *         merchantId: "merchantId",
 *         sourceWalletAddressId: "sourceWalletAddressId"
 *     }
 */
export interface DeleteSourceWalletAddressesRequest {
    /** ID of the merchant */
    merchantId: string;
    /** ID of the source wallet address to delete */
    sourceWalletAddressId: string;
}
