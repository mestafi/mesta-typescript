
import type * as Mesta from "../../../../index.js";

/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface UpdateBeneficiariesRequest {
    /** Beneficiary ID */
    id: string;
    type?: UpdateBeneficiariesRequest.Type;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    fullName?: string;
    email?: string;
    phone?: string;
    birthDate?: string;
    address?: UpdateBeneficiariesRequest.Address;
    metadata?: Record<string, unknown>;
    beneficiaryRelationship?: Mesta.BeneficiaryRelationship;
    purposeOfPayment?: Mesta.PurposeOfPayment;
    purposeOfPaymentDocument?: Mesta.PurposeOfPaymentDocumentRequest;
}

export namespace UpdateBeneficiariesRequest {
    export const Type = {
        Individual: "individual",
        Business: "business",
    } as const;
    export type Type = (typeof Type)[keyof typeof Type];

    export interface Address {
        street?: string | undefined;
        street2?: string | undefined;
        city?: string | undefined;
        state?: string | undefined;
        postalCode?: string | undefined;
        country?: string | undefined;
    }
}
