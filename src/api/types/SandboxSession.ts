
import type * as Mesta from "../index.js";

/**
 * Read status only: API-key metadata never contains apiKey or apiSecret. `fixtures` is absent until the sample data is complete; its `webhook.signingKey` remains retrievable. Status reads remain available while paused, resetting or failed.
 */
export interface SandboxSession {
    sandboxId: string;
    merchantId: string;
    /** deleted, killed and expired are closed states. An operator closing one again receives 409 SANDBOX_ALREADY_CLOSED; this operator-only code is not a DELETE response. */
    status: SandboxSession.Status;
    plane: SandboxSession.Plane;
    apiBaseUrl: string;
    portalUrl: string;
    createdAt: string;
    /** Seven days from creation while unclaimed; 72 hours from the sign-up or claim until the email is verified; null afterwards. */
    expiresAt: string | null;
    emailVerified: boolean;
    /** Mesta's pause message, or null when no message is set. Read with executionPaused; null uses the portal's default pause notice. */
    pauseMessage: string | null;
    counts: Mesta.SandboxCounts;
    /** True while Mesta has paused the sandbox environment; every other call answers 503 SANDBOX_PAUSED meanwhile. */
    executionPaused: boolean;
    /** The merchant wallet's state: `ready` when the four test-network addresses exist, `pending` while the wallet was skipped for vendor capacity when the sample data was added, or a request is waiting, `failed` otherwise. The `wallets` entry of `seed.steps` carries the same state; `fixtures.wallets` is empty until the addresses exist. */
    wallets: SandboxSession.Wallets;
    keys: Mesta.SandboxKeyMetadata[];
    seed: Mesta.SandboxSeed;
    /** Present only after a failed reset. The sandbox returns to its previous status with `seed.status` complete and `seed.error` set. Retry reset or delete the sandbox. */
    reset?: SandboxSession.Reset | undefined;
    fixtures?: Mesta.SandboxFixtures | undefined;
}

export namespace SandboxSession {
    /** deleted, killed and expired are closed states. An operator closing one again receives 409 SANDBOX_ALREADY_CLOSED; this operator-only code is not a DELETE response. */
    export const Status = {
        Unclaimed: "unclaimed",
        Claimed: "claimed",
        Resetting: "resetting",
        Expired: "expired",
        Failed: "failed",
        Deleted: "deleted",
        Killed: "killed",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
    export const Plane = {
        Sandbox: "sandbox",
    } as const;
    export type Plane = (typeof Plane)[keyof typeof Plane];

    /**
     * The merchant wallet's state: `ready` when the four test-network addresses exist, `pending` while the wallet was skipped for vendor capacity when the sample data was added, or a request is waiting, `failed` otherwise. The `wallets` entry of `seed.steps` carries the same state; `fixtures.wallets` is empty until the addresses exist.
     */
    export interface Wallets {
        status: Wallets.Status;
        /** Sender wallet usage and per-sender state, separate from the merchant wallet status. used counts senders for which a wallet provider client has been created. */
        senders: Wallets.Senders;
        /** Set when a wallet request is waiting. */
        requestedAt?: string | undefined;
    }

    export namespace Wallets {
        export const Status = {
            Ready: "ready",
            Pending: "pending",
            Failed: "failed",
        } as const;
        export type Status = (typeof Status)[keyof typeof Status];

        /**
         * Sender wallet usage and per-sender state, separate from the merchant wallet status. used counts senders for which a wallet provider client has been created.
         */
        export interface Senders {
            used: number;
            cap: number;
            items: Senders.Items.Item[];
        }

        export namespace Senders {
            export type Items = Items.Item[];

            export namespace Items {
                export interface Item {
                    /** Sender id. */
                    id: string;
                    status: Item.Status;
                }

                export namespace Item {
                    export const Status = {
                        Pending: "pending",
                        Ready: "ready",
                        Failed: "failed",
                    } as const;
                    export type Status = (typeof Status)[keyof typeof Status];
                }
            }
        }
    }

    /**
     * Present only after a failed reset. The sandbox returns to its previous status with `seed.status` complete and `seed.error` set. Retry reset or delete the sandbox.
     */
    export interface Reset {
        error: Reset.Error_;
        recovery: Reset.Recovery.Item[];
    }

    export namespace Reset {
        export interface Error_ {
            code: string;
            phase: string;
        }

        export type Recovery = Recovery.Item[];

        export namespace Recovery {
            export const Item = {
                Reset: "reset",
                Delete: "delete",
            } as const;
            export type Item = (typeof Item)[keyof typeof Item];
        }
    }
}
