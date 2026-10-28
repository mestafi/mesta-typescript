
import type * as Mesta from "../../../../index.js";

/**
 * @example
 *     {
 *         beneficiaryId: "550e8400-e29b-41d4-a716-446655440001",
 *         type: "bank_account",
 *         data: {
 *             accountNumber: "1234567890"
 *         }
 *     }
 */
export interface CreatePaymentMethodRequest {
    /** ID of the beneficiary this payment method belongs to */
    beneficiaryId: string;
    type: Mesta.PaymentMethodType;
    /** Payment method data. Structure depends on the type field. See BankAccountInfo, PixInfo, InstapayInfo, etc. */
    data: CreatePaymentMethodRequest.Data;
    /** Display label for the payment method */
    label?: string;
    /** Whether user consent is required before approval */
    requiresUserConsent?: boolean;
}

export namespace CreatePaymentMethodRequest {
    /**
     * Payment method data. Structure depends on the type field. See BankAccountInfo, PixInfo, InstapayInfo, etc.
     */
    export type Data =
        | Mesta.BankAccountInfo
        | Mesta.PixInfo
        | Mesta.InstapayInfo
        | Mesta.SwiftpayPesonetInfo
        | Mesta.SpeiInfo
        | Mesta.MobileMoneyInfo
        | Mesta.CryptoWalletInfo;
}
