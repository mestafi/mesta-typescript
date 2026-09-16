
export interface CreateSourceWalletAddressesResponse {
    data?: CreateSourceWalletAddressesResponse.Data.Item[] | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace CreateSourceWalletAddressesResponse {
    export type Data = Data.Item[];

    export namespace Data {
        export interface Item {
            id?: string | undefined;
            address?: string | undefined;
            chain?: Item.Chain | undefined;
            ownerId?: string | undefined;
            ownerType?: Item.OwnerType | undefined;
            riskLevel?: Item.RiskLevel | undefined;
            merchantId?: string | undefined;
            isWhitelistedOnProviders?: boolean | undefined;
            createdAt?: string | undefined;
            updatedAt?: string | undefined;
        }

        export namespace Item {
            export const Chain = {
                Ethereum: "ethereum",
                Polygon: "polygon",
                Solana: "solana",
                Tron: "tron",
                Stellar: "stellar",
            } as const;
            export type Chain = (typeof Chain)[keyof typeof Chain];
            export const OwnerType = {
                Merchant: "merchant",
                Sender: "sender",
                Organization: "organization",
            } as const;
            export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType];
            export const RiskLevel = {
                Low: "low",
                Medium: "medium",
                High: "high",
                Critical: "critical",
            } as const;
            export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];
        }
    }
}
