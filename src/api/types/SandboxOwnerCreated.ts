
import type * as Mesta from "../index.js";

export interface SandboxOwnerCreated extends Mesta.SandboxCreated {
    status: SandboxOwnerCreated.Status;
    emailVerified: boolean;
    session: SandboxOwnerCreated.Session;
}

export namespace SandboxOwnerCreated {
    export const Status = {
        Claimed: "claimed",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];

    export interface Session {
        accessToken: string;
        refreshToken: string;
    }
}
