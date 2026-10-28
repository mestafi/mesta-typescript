
import type * as Mesta from "../index.js";

export interface AssociateSelfieVerificationEnvelope {
    data: AssociateSelfieVerificationEnvelope.Data;
    requestId: number;
}

export namespace AssociateSelfieVerificationEnvelope {
    export interface Data {
        latestSession: Mesta.SelfieVerificationSession | null;
        previousSessions: Mesta.SelfieVerificationSession[];
    }
}
