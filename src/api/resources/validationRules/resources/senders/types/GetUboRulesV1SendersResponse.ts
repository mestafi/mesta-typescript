
import type * as Mesta from "../../../../../index.js";

export interface GetUboRulesV1SendersResponse {
    data?: GetUboRulesV1SendersResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace GetUboRulesV1SendersResponse {
    export interface Data {
        /** Unique identifier for the validation rules */
        id?: string | undefined;
        /** Version number of the rules */
        version?: number | undefined;
        /** Timestamp when the rules were created (ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ) */
        createdAt?: string | undefined;
        /** Timestamp when the rules were last updated (ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ) */
        updatedAt?: string | undefined;
        /** Timestamp when the rules were deleted, if applicable (ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ) */
        deletedAt?: (string | null) | undefined;
        /** Identifier of the user who created the rules */
        createdBy?: string | undefined;
        /** Identifier of the user who last updated the rules */
        updatedBy?: string | undefined;
        /** Identifier of the user who deleted the rules */
        deletedBy?: (string | null) | undefined;
        /** Type of entity these rules apply to */
        owner?: Data.Owner | undefined;
        /** Category of the owner - always 'business' for UBO rules */
        ownerType?: Data.OwnerType | undefined;
        /** Two-letter country code (ISO 3166-1 alpha-2) */
        country?: string | undefined;
        rules?: Data.Rules | undefined;
    }

    export namespace Data {
        /** Type of entity these rules apply to */
        export const Owner = {
            Sender: "sender",
        } as const;
        export type Owner = (typeof Owner)[keyof typeof Owner];
        /** Category of the owner - always 'business' for UBO rules */
        export const OwnerType = {
            Business: "business",
        } as const;
        export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType];

        export interface Rules {
            ubo?: Rules.Ubo | undefined;
        }

        export namespace Rules {
            export interface Ubo {
                /** List of required fields for UBO creation */
                requiredFields?: Mesta.ValidationField[] | undefined;
            }
        }
    }
}
