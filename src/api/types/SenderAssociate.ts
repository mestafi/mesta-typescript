
import type * as Mesta from "../index.js";

export interface SenderAssociate {
    id: string;
    senderId: string;
    firstName?: string | undefined;
    lastName?: string | undefined;
    birthDate?: (string | null) | undefined;
    email?: (string | null) | undefined;
    phone?: (string | null) | undefined;
    address?: Mesta.SenderAssociateAddress | undefined;
    identity?: Record<string, unknown> | undefined;
    nationality?: (string | null) | undefined;
    roles: Mesta.SenderAssociateRole[];
    linkedUboId?: (string | null) | undefined;
    kyc?: (SenderAssociate.Kyc | null) | undefined;
    pepDeclaration?: (boolean | null) | undefined;
    pepQuestionnaire?: (Record<string, unknown> | null) | undefined;
    documents?: Record<string, unknown>[] | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}

export namespace SenderAssociate {
    export interface Kyc {
        status?: Kyc.Status | undefined;
        statusUpdatedAt?: string | undefined;
    }

    export namespace Kyc {
        export const Status = {
            Unverified: "unverified",
            Pending: "pending",
            Approved: "approved",
            Declined: "declined",
        } as const;
        export type Status = (typeof Status)[keyof typeof Status];
    }
}
