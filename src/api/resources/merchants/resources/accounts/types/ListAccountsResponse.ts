
export interface ListAccountsResponse {
    /** List of merchant accounts */
    data?: ListAccountsResponse.Data.Item[] | undefined;
    /** Total number of accounts matching the query */
    total?: number | undefined;
    /** Indicates if there are more accounts available for pagination */
    hasNext?: boolean | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace ListAccountsResponse {
    export type Data = Data.Item[];

    export namespace Data {
        export interface Item {
            /** Unique identifier for the account */
            id?: string | undefined;
            /** Timestamp when the account was created */
            createdAt?: string | undefined;
            /** Timestamp when the account was last updated */
            updatedAt?: string | undefined;
            /** Currency code for the account */
            currency?: Item.Currency | undefined;
            /** Current balance of the account as a decimal string */
            balance?: string | undefined;
            /** Identifier of the merchant who owns the account */
            merchantId?: string | undefined;
            /** Blockchain address for deposits */
            depositAddress?: (string | null) | undefined;
            /** Traditional banking deposit account details */
            depositAccount?: (Record<string, unknown> | null) | undefined;
            /** Sender identifier if this is a sender-level account */
            senderId?: (string | null) | undefined;
        }

        export namespace Item {
            /** Currency code for the account */
            export const Currency = {
                Usd: "USD",
                Eur: "EUR",
                Gbp: "GBP",
                Mxn: "MXN",
                UsdcEth: "USDC_ETH",
                UsdcPol: "USDC_POL",
                UsdcSol: "USDC_SOL",
                UsdtEth: "USDT_ETH",
                UsdtPol: "USDT_POL",
                UsdtSol: "USDT_SOL",
                UsdtTrx: "USDT_TRX",
            } as const;
            export type Currency = (typeof Currency)[keyof typeof Currency];
        }
    }
}
