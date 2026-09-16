
export interface BankAccount {
    /** Bank account number */
    accountNumber: string;
    /** Wire routing number. Required for US beneficiaries */
    routingNumber?: string | undefined;
    /** Type of account (e.g., savings, checking)- Only required for non-US/EU/GB beneficiaries */
    accountType?: string | undefined;
    /** Document number of the bank (e.g 11 digit code for Argentina) - Only required for certain countries, check validation rules endpoint for the specific country */
    bankDocumentNumber?: string | undefined;
    /** Bank Id, fetch this from the /v1/banks endpoint. Required for some non-US beneficiaries. For US beneficiaries, use routingNumber instead. */
    bankId?: string | undefined;
    /** IFSC code of the bank. Required for India (INR) */
    ifscCode?: string | undefined;
    /** Sort code of the bank. Required for UK (GBP) */
    sortCode?: string | undefined;
    /** BIC (SWIFT) code. Required for EUR payments */
    bic?: string | undefined;
    /** BSB number of the bank. Required for Australia (AUD) */
    bsbNumber?: string | undefined;
    /** Remittance purpose. Required for Australia (AUD). Refer to https://docs.mesta.xyz/docs/all-payment-types for the list of remittance purposes */
    remittancePurpose?: string | undefined;
    /** Combined format of Institution Number (3 digits) and Transit Number (5 digits). Required for Canada. Example: 00607621 */
    branchCode?: string | undefined;
    /** Country code of the bank account. Required if the bank account country is different from beneficiry address country */
    bankAccountCountry?: string | undefined;
    /** Address of the bank */
    bankAddress?: string | undefined;
    /** City of the bank */
    bankCity?: string | undefined;
    /** Name of the bank */
    bankName?: string | undefined;
    /** Post code of the bank */
    bankPostCode?: string | undefined;
    /** State of the bank */
    bankState?: string | undefined;
    /** Transfer type (e.g., swift, ach, wire) */
    transferType?: string | undefined;
    /** Country code of the bank. May be returned alongside bankAccountCountry. */
    bankCountry?: string | undefined;
}
