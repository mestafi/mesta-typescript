
import type * as Mesta from "../index.js";

export interface CreateSandboxSessionRequest {
    challenge: Mesta.SandboxChallengeSolution;
    /** Must be true: your acceptance of the Sandbox terms (https://ohana.sandbox.mesta.xyz/terms?version=sandbox-2026-10); the Sandbox privacy notice (https://docs.mesta.xyz/docs/sandbox-privacy) explains how Mesta uses your details. An agent may not set it without the person's instruction. Missing or false answers 422 with the terms URL and version in the body. */
    acceptTerms: boolean;
    /** One to 64 Unicode letters or decimal digits, spaces, or . & ' -; no trailing newline. The server validates Unicode code points. Defaults to `Sandbox {shortId}`. */
    name?: string | undefined;
    /** ISO 3166-1 alpha-2 code from the sandbox's merchant country list. Default US. */
    country?: string | undefined;
    /** `sender` is the only value accepted at launch; `merchant` answers 409 NOT_AVAILABLE_IN_SANDBOX, superseding the earlier 422 (merchant-funded sandboxes arrive in a later release). */
    depositSource?: CreateSandboxSessionRequest.DepositSource | undefined;
    /** Optional. The email address to send the claim link to, in a "Claim your Mesta sandbox" mail; the 201 then carries `claim.sentTo`, the masked address, instead of `claimUrl`. The address passes the same checks as the sign-up's email and is refused with the same codes: 400 VALIDATION_FAILED when it cannot receive mail, 429 SANDBOX_CAP_EXCEEDED for the per-email and per-domain caps, and 409 EMAIL_ALREADY_OWNS_SANDBOX when it already owns a live sandbox. An agent creating a sandbox for a person always passes the person's address, so it never holds the claim link. */
    claimEmail?: string | undefined;
}

export namespace CreateSandboxSessionRequest {
    /** `sender` is the only value accepted at launch; `merchant` answers 409 NOT_AVAILABLE_IN_SANDBOX, superseding the earlier 422 (merchant-funded sandboxes arrive in a later release). */
    export const DepositSource = {
        Sender: "sender",
    } as const;
    export type DepositSource = (typeof DepositSource)[keyof typeof DepositSource];
}
