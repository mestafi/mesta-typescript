
export interface ListTransactionsResponse {
    /** List of merchant transactions */
    data?: ListTransactionsResponse.Data.Item[] | undefined;
    /** Total number of transactions matching the query */
    total?: number | undefined;
    /** Indicates if there are more transactions available for pagination */
    hasNext?: boolean | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace ListTransactionsResponse {
    export type Data = Data.Item[];

    export namespace Data {
        export interface Item {
            /** Unique identifier for the transaction */
            id?: string | undefined;
            /** Merchant identifier */
            merchantId?: string | undefined;
            /** Transaction amount as a decimal string */
            amount?: string | undefined;
            /** Currency code */
            currency?: string | undefined;
            /** Transaction type */
            type?: string | undefined;
            /** Sender identifier */
            senderId?: string | undefined;
            /** Transaction ID (exposed only to org) */
            transactionId?: (string | null) | undefined;
            /** Virtual transaction ID (exposed only to org) */
            virtualTransactionId?: (string | null) | undefined;
            /** Order identifier */
            orderId?: string | undefined;
            /** Timestamp when the transaction was created */
            createdAt?: string | undefined;
            /** Timestamp when the transaction was last updated */
            updatedAt?: string | undefined;
        }
    }
}
