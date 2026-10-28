
export interface ListSenderBalancesAccountsResponse {
    data?: ListSenderBalancesAccountsResponse.Data.Item[] | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace ListSenderBalancesAccountsResponse {
    export type Data = Data.Item[];

    export namespace Data {
        export interface Item {
            /** Unique identifier for the sender */
            senderId: string;
            /** Currency code for the balance */
            currency: string;
            /** Current balance as a decimal string */
            balance: string;
            /** Name of the sender */
            senderName: string;
            /** Email address of the sender */
            senderEmail: string;
        }
    }
}
