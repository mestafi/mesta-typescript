
import type * as Mesta from "../index.js";

export interface VirtualAccountSetupResponse {
    currency: VirtualAccountSetupResponse.Currency;
    status: Mesta.VirtualAccountSetupStatus;
    requestedAt: string;
    completedAt: string | null;
    blockers: Mesta.VirtualAccountSetupBlocker[];
    /** Recognized fields skipped because they were not current missing requirements. Omitted when every submitted field was accepted. Other valid submitted fields are still processed. */
    unacceptedFields?: VirtualAccountSetupResponse.UnacceptedFields.Item[] | undefined;
}

export namespace VirtualAccountSetupResponse {
    export const Currency = {
        Usd: "USD",
        Eur: "EUR",
        Gbp: "GBP",
        Mxn: "MXN",
    } as const;
    export type Currency = (typeof Currency)[keyof typeof Currency];
    export type UnacceptedFields = UnacceptedFields.Item[];

    export namespace UnacceptedFields {
        export interface Item {
            /** Submitted field using its public request-body container, for example senderDetails.registrationDate or uboDetails.nationality. */
            field: string;
            /** UBO or associate ID. Present only for person-level fields. */
            subjectId?: string | undefined;
        }
    }
}
