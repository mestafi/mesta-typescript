
export interface SimulateDepositResponse {
    data: SimulateDepositResponse.Data;
    requestId: number;
}

export namespace SimulateDepositResponse {
    export interface Data {
        /** The deposit's id; readable at GET /v1/merchant/fiat-deposits/{id} or /v1/merchant/stablecoin-deposits/{id}. */
        id: string;
        ownerType: Data.OwnerType;
        ownerId: string;
        currency: string;
        amount: string;
        outcome: Data.Outcome;
    }

    export namespace Data {
        export const OwnerType = {
            Sender: "sender",
            Merchant: "merchant",
        } as const;
        export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType];
        export const Outcome = {
            Settled: "settled",
            Rejected: "rejected",
        } as const;
        export type Outcome = (typeof Outcome)[keyof typeof Outcome];
    }
}
