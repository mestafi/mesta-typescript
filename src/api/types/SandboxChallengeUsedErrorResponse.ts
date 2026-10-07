
import type * as Mesta from "../index.js";

/**
 * Creation conflicts: a redeemed challenge, the unavailable merchant-funded sandbox, or a claimEmail that already owns a live sandbox.
 */
export type SandboxChallengeUsedErrorResponse =
    | Mesta.SandboxChallengeUsedError
    | Mesta.SandboxDepositSourceError
    | Mesta.SandboxClaimEmailOwnsSandboxError;
