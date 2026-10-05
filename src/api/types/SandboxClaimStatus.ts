
/**
 * An expired, unknown or malformed token returns only status: expired inside data. Other states carry the claim metadata; `fresh` and `seeding` probes do not consume the claim limit.
 */
export type SandboxClaimStatus =
    | {
          status?: ("fresh" | "seeding" | "used" | "killed") | undefined;
          sandboxId: string;
          shortId?: string | undefined;
          merchantName: string;
          createdAt: string;
          expiresAt: string | null;
          seed: {
              step:
                  | (
                        | "merchant"
                        | "keys"
                        | "terms"
                        | "merchant_setup"
                        | "webhook"
                        | "wallets"
                        | "senders"
                        | "deposits"
                        | "beneficiaries"
                        | "orders"
                        | "fixtures"
                    )
                  | null;
          };
          counts: {
              accounts: number;
              wallets: number;
              webhooks: number;
              senders: number;
              beneficiaries: number;
              orders: number;
              deposits: number;
          };
          preClaimKeys: {
              id: string;
              kind: "standard" | "agent" | "docs";
              createdAt: string;
          }[];
          preClaimEndpoints: {
              host: string;
          }[];
      }
    | {
          status: "expired";
      };
