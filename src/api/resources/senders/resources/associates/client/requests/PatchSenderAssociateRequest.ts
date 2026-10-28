
import type * as Mesta from "../../../../../../index.js";

/**
 * @example
 *     {
 *         associateId: "associateId"
 *     }
 */
export interface PatchSenderAssociateRequest {
    associateId: string;
    roles?: Mesta.SenderAssociateRole[];
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    email?: string;
    phone?: string;
    address?: Mesta.PatchSenderAssociateAddress;
    nationality?: string;
    identity?: Mesta.PatchSenderAssociateIdentity;
    pepDeclaration?: boolean;
    pepQuestionnaire?: Record<string, unknown>;
    /** Base64 encoded source-of-funds document. */
    sofDocument?: string;
    /** Base64 encoded verification report. */
    verificationReport?: string;
    verificationReportFileName?: string;
}
