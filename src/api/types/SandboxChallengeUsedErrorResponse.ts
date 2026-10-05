
import type * as Mesta from "../index.js";

/**
 * Creation conflicts: a redeemed challenge, or the unavailable merchant-funded sandbox.
 */
export type SandboxChallengeUsedErrorResponse = Mesta.SandboxChallengeUsedError | Mesta.SandboxDepositSourceError;
