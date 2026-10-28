
export interface LookupBankBeneficiariesResponse {
    /** List of banks */
    data?: LookupBankBeneficiariesResponse.Data.Item[] | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace LookupBankBeneficiariesResponse {
    export type Data = Data.Item[];

    export namespace Data {
        export interface Item {
            /** Unique identifier for the bank */
            id?: string | undefined;
            /** Name of the bank */
            name?: string | undefined;
            /** List of account types supported by this bank */
            supportedAccountTypes?: string[] | undefined;
        }
    }
}
