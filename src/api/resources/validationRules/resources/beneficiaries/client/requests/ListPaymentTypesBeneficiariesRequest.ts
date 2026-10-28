
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         ownerType: "individual",
 *         country: "country"
 *     }
 */
export interface ListPaymentTypesBeneficiariesRequest {
    /** Type of beneficiary entity */
    ownerType: Mesta.validationRules.ListPaymentTypesBeneficiariesRequestOwnerType;
    /** Two-letter ISO country code */
    country: string;
}
