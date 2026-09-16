
export interface ListSourceWalletAddressesResponse {
    /** Array of source wallet addresses */
    data?: ListSourceWalletAddressesResponse.Data.Item[] | undefined;
    /** Total number of records */
    total?: number | undefined;
    /** Whether there are more pages */
    hasNext?: boolean | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace ListSourceWalletAddressesResponse {
    export type Data = Data.Item[];

    export namespace Data {
        export interface Item {
            /** Unique identifier for the source wallet address */
            id?: string | undefined;
            /** Version number of the record */
            version?: number | undefined;
            /** Timestamp when the source wallet address was created */
            createdAt?: string | undefined;
            /** Timestamp when the source wallet address was last updated */
            updatedAt?: string | undefined;
            /** The blockchain address */
            address?: string | undefined;
            /** The blockchain network */
            chain?: Item.Chain | undefined;
            /** ID of the entity that owns this address */
            ownerId?: string | undefined;
            /** Type of the address owner */
            ownerType?: Item.OwnerType | undefined;
            /** Risk assessment level of the address */
            riskLevel?: Item.RiskLevel | undefined;
            /** ID of the merchant associated with this address */
            merchantId?: string | undefined;
        }

        export namespace Item {
            /** The blockchain network */
            export const Chain = {
                Ethereum: "ethereum",
                Polygon: "polygon",
                Solana: "solana",
                Tron: "tron",
                Stellar: "stellar",
            } as const;
            export type Chain = (typeof Chain)[keyof typeof Chain];
            /** Type of the address owner */
            export const OwnerType = {
                Merchant: "merchant",
                Sender: "sender",
                Organization: "organization",
            } as const;
            export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType];
            /** Risk assessment level of the address */
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
