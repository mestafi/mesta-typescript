
import type * as Mesta from "../index.js";

export interface VirtualAccountSetupEnvelope {
    data: Mesta.VirtualAccountSetupResponse;
    /** Trace identifier for support and debugging. This is not a setup-request ID. */
    requestId: number;
}
