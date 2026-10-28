
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         ownerType: "individual",
 *         country: "country"
 *     }
 */
export interface GetUboRulesV1SendersRequest {
    /** Type of sender entity */
    ownerType: Mesta.validationRules.GetUboRulesV1SendersRequestOwnerType;
    /** Two-letter ISO country code */
    country: string;
}
