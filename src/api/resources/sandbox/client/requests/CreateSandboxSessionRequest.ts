
import type * as Mesta from "../../../../index.js";

/**
 * @example
 *     {
 *         challenge: {
 *             challenge: "c107eca74592b0fdfd64956fc1ae13a283519c10e796a9a0e84606efe3f55966",
 *             salt: "00112233445566778899aabbccddeeff.1790672400000",
 *             maxnumber: 2097152,
 *             expiresAt: "2026-09-29T09:00:00Z",
 *             signature: "9d2e_example",
 *             number: 12345
 *         },
 *         acceptTerms: true,
 *         name: "Northwind Cross-Border Inc.",
 *         country: "US",
 *         depositSource: "sender"
 *     }
 */
export interface CreateSandboxSessionRequest {
    challenge: Mesta.SandboxChallengeSolution;
    /** Must be true: your acceptance of the Sandbox terms (https://ohana.sandbox.mesta.xyz/terms?version=sandbox-2026-10); the Sandbox privacy notice (https://docs.mesta.xyz/docs/sandbox-privacy) explains how Mesta uses your details. An agent may not set it without the person's instruction. Missing or false answers 422 with the terms URL and version in the body. */
    acceptTerms: boolean;
    /** One to 64 Unicode letters or decimal digits, spaces, or . & ' -; no trailing newline. The server validates Unicode code points. Defaults to Sandbox {shortId}. */
    name?: string;
    /** ISO 3166-1 alpha-2 code from the sandbox's merchant country list. Default US. */
    country?: string;
    /** `sender` is the only value accepted at launch; `merchant` answers 409 NOT_AVAILABLE_IN_SANDBOX, superseding the earlier 422 (merchant-funded sandboxes arrive in a later release). */
    depositSource?: CreateSandboxSessionRequest.DepositSource;
}

export namespace CreateSandboxSessionRequest {
    /** `sender` is the only value accepted at launch; `merchant` answers 409 NOT_AVAILABLE_IN_SANDBOX, superseding the earlier 422 (merchant-funded sandboxes arrive in a later release). */
    export const DepositSource = {
        Sender: "sender",
    } as const;
    export type DepositSource = (typeof DepositSource)[keyof typeof DepositSource];
}
