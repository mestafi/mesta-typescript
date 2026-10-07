
export interface SandboxChallengeSolution {
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
    /** The matching number, less than maxnumber. */
    number: number;
}
