
export interface SandboxProductionRequested {
    requestedAt: string;
    /** The tracker's first state; the session read's `productionRequest` follows the request from here. */
    status: SandboxProductionRequested.Status;
}

export namespace SandboxProductionRequested {
    /** The tracker's first state; the session read's `productionRequest` follows the request from here. */
    export const Status = {
        Requested: "requested",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
}
