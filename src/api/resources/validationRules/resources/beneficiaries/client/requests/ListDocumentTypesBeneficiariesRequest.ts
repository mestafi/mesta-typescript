
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         ownerType: "individual",
 *         country: "country"
 *     }
 */
export interface ListDocumentTypesBeneficiariesRequest {
    /** Type of beneficiary entity */
    ownerType: Mesta.validationRules.ListDocumentTypesBeneficiariesRequestOwnerType;
    /** Two-letter ISO country code */
    country: string;
}
