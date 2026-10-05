
export interface SandboxSeedPointer {
    status: SandboxSeedPointer.Status;
    /** Poll GET /v1/sandbox/sessions/{id}. */
    url: string;
}

export namespace SandboxSeedPointer {
    export const Status = {
        Running: "running",
        Complete: "complete",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
}
