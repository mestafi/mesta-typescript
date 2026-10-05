
import type * as Mesta from "../index.js";

/**
 * Every sample object by label, present once the sample data is complete. Labels are stable across sandboxes; ids are not.
 */
export interface SandboxFixtures {
    version: string;
    depositSource: SandboxFixtures.DepositSource;
    senders: SandboxFixtures.Senders.Item[];
    beneficiaries: SandboxFixtures.Beneficiaries.Item[];
    orders: SandboxFixtures.Orders.Item[];
    webhook: SandboxFixtures.Webhook;
    /** The address array when provisioned; empty while no wallet exists. The state is the session read's `wallets` block and the `wallets` entry of `seed.steps`. */
    wallets: Mesta.SandboxWallet[];
    balances: SandboxFixtures.Balances.Item[];
    /** The values that force outcomes, as documented at https://docs.mesta.xyz/docs/sandbox-simulation. */
    magicValues: Record<string, unknown>;
}

export namespace SandboxFixtures {
    export const DepositSource = {
        Sender: "sender",
    } as const;
    export type DepositSource = (typeof DepositSource)[keyof typeof DepositSource];
    export type Senders = Senders.Item[];

    export namespace Senders {
        export interface Item {
            id: string;
            label: string;
        }
    }

    export type Beneficiaries = Beneficiaries.Item[];

    export namespace Beneficiaries {
        export interface Item {
            id: string;
            label: string;
            paymentMethodId: string;
        }
    }

    export type Orders = Orders.Item[];

    export namespace Orders {
        export interface Item {
            id: string;
            status: Item.Status;
        }

        export namespace Item {
            export const Status = {
                Created: "created",
                AwaitingBeneficiaryVerification: "awaiting_beneficiary_verification",
                AwaitingFunds: "awaiting_funds",
                AwaitingFundsTimeout: "awaiting_funds_timeout",
                NeedReview: "need_review",
                FundsReceived: "funds_received",
                InProgress: "in_progress",
                SentToBeneficiary: "sent_to_beneficiary",
                Success: "success",
                Failed: "failed",
                Cancelled: "cancelled",
                Rejected: "rejected",
                Returned: "returned",
                PaymentSubmitted: "payment_submitted",
                RefundInProgress: "refund_in_progress",
                Refunded: "refunded",
            } as const;
            export type Status = (typeof Status)[keyof typeof Status];
        }
    }

    export interface Webhook {
        id: string;
        url: string;
        /** Your merchant's webhook signing key, the one every delivery is signed with. */
        signingKey: string;
    }

    export type Balances = Balances.Item[];

    export namespace Balances {
        export interface Item {
            owner: string;
            currency: string;
            amount: string;
        }
    }
}
