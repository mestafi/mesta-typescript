
export interface SandboxResetAccepted {
    jobId: string;
    status: SandboxResetAccepted.Status;
}

export namespace SandboxResetAccepted {
    export const Status = {
        Resetting: "resetting",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
}
