
export interface CryptoWalletInfo {
    /** Cryptocurrency wallet address */
    address: string;
    /** Blockchain network for the wallet */
    chain: CryptoWalletInfo.Chain;
}

export namespace CryptoWalletInfo {
    /** Blockchain network for the wallet */
    export const Chain = {
        Ethereum: "ethereum",
        Solana: "solana",
        Polygon: "polygon",
        Tron: "tron",
        Stellar: "stellar",
    } as const;
    export type Chain = (typeof Chain)[keyof typeof Chain];
}
