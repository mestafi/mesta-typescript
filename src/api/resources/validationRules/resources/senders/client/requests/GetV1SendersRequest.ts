
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         ownerType: "individual",
 *         country: "country"
 *     }
 */
export interface GetV1SendersRequest {
    /** Type of sender entity (individual or business) */
    ownerType: Mesta.validationRules.GetV1SendersRequestOwnerType;
    /** Two-letter ISO country code (e.g., IN for India) */
    country: string;
}
