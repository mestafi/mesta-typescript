
export interface GenerateOnDemandDepositBankAccountsResponse {
    data?: GenerateOnDemandDepositBankAccountsResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace GenerateOnDemandDepositBankAccountsResponse {
    export interface Data {
        /** Status message indicating the account creation */
        message?: string | undefined;
    }
}
