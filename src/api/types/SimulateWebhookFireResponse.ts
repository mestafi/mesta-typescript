
export interface SimulateWebhookFireResponse {
    data: SimulateWebhookFireResponse.Data;
    requestId: number;
}

export namespace SimulateWebhookFireResponse {
    export interface Data {
        event: string;
        aggregateId: string;
        published: boolean;
    }
}
