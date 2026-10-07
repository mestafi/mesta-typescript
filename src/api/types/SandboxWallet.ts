
export interface SandboxWallet {
    /** `merchant`, or a sender id. */
    owner: string;
    chain: string;
    address: string;
    explorer: string;
    /** Whether test tokens from the network's faucet arrived. */
    funded: boolean;
}
