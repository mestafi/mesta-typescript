
/**
 * A proof-of-work challenge from GET /v1/sandbox/challenge. The hidden number lies in [0, maxnumber); `challenge` is the lowercase hex SHA-256 of the UTF-8 bytes of `salt` followed by the decimal digits of the number, with no separator. Known-answer vector: salt `00112233445566778899aabbccddeeff.1790672400000`, number `12345`, challenge `c107eca74592b0fdfd64956fc1ae13a283519c10e796a9a0e84606efe3f55966`.
 */
export interface SandboxChallenge {
    algorithm: SandboxChallenge.Algorithm;
    /** Lowercase hex SHA-256 digest to match. */
    challenge: string;
    /** Sixteen random bytes as hex, a period, and the expiry as Unix milliseconds. The salt is opaque to solvers; hash it unchanged. */
    salt: string;
    /** Exclusive upper bound of the hidden number. Expected work is maxnumber / 2 hashes. */
    maxnumber: number;
    /** Repeats the timestamp inside `salt`. A challenge is valid for 300 seconds. */
    expiresAt: string;
    /** Mesta's HMAC over challenge, salt and maxnumber. Return it unchanged. */
    signature: string;
}

export namespace SandboxChallenge {
    export const Algorithm = {
        Sha256: "SHA-256",
    } as const;
    export type Algorithm = (typeof Algorithm)[keyof typeof Algorithm];
}
