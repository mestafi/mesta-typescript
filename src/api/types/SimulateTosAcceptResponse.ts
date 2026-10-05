
export interface SimulateTosAcceptResponse {
    data: SimulateTosAcceptResponse.Data;
    requestId: number;
}

export namespace SimulateTosAcceptResponse {
    export interface Data {
        senderId: string;
        tos: Data.Tos;
    }

    export namespace Data {
        export interface Tos {
            status: Tos.Status;
            acceptedAt: string;
        }

        export namespace Tos {
            export const Status = {
                Accepted: "accepted",
            } as const;
            export type Status = (typeof Status)[keyof typeof Status];
        }
    }
}
