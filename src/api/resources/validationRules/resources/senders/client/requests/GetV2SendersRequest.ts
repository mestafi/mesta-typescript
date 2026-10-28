
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         ownerType: "individual",
 *         country: "country"
 *     }
 */
export interface GetV2SendersRequest {
    /** Type of sender entity (individual or business) */
    ownerType: Mesta.validationRules.GetV2SendersRequestOwnerType;
    /** Two-letter ISO country code (e.g., IN for India) */
    country: string;
}
