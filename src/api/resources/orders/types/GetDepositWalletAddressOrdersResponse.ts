
export interface GetDepositWalletAddressOrdersResponse {
    data?: GetDepositWalletAddressOrdersResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace GetDepositWalletAddressOrdersResponse {
    export interface Data {
        /** Unique identifier for the wallet address */
        id?: string | undefined;
        /** Version number of the wallet record */
        version?: number | undefined;
        /** Timestamp when the wallet was created */
        createdAt?: string | undefined;
        /** Timestamp when the wallet was last updated */
        updatedAt?: string | undefined;
        /** The blockchain wallet address */
        address?: string | undefined;
        /** The blockchain network */
        chain?: Data.Chain | undefined;
        /** Identifier of the associated merchant */
        merchantId?: string | undefined;
    }

    export namespace Data {
        /** The blockchain network */
        export const Chain = {
            Ethereum: "ethereum",
            Polygon: "polygon",
            Solana: "solana",
            Tron: "tron",
            Stellar: "stellar",
        } as const;
        export type Chain = (typeof Chain)[keyof typeof Chain];
    }
}
