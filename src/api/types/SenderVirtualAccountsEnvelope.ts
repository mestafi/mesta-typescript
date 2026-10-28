
import type * as Mesta from "../index.js";

export interface SenderVirtualAccountsEnvelope {
    /** Virtual bank accounts available for the requested currency. The array currently contains at most one account. */
    data: Mesta.SenderVirtualAccount[];
    /** Trace identifier for support and debugging. */
    requestId: number;
}
