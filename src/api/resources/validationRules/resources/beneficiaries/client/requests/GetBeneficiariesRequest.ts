
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         ownerType: "individual",
 *         country: "country"
 *     }
 */
export interface GetBeneficiariesRequest {
    ownerType: Mesta.validationRules.GetBeneficiariesRequestOwnerType;
    country: string;
}
