
export interface ListEventsResponse {
    data?: ListEventsResponse.Data.Item[] | undefined;
    total?: number | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace ListEventsResponse {
    export type Data = Data.Item[];

    export namespace Data {
        export interface Item {
            id?: string | undefined;
            /** Event name */
            name?: string | undefined;
            aggregateType?: string | undefined;
            aggregateId?: string | undefined;
            merchantId?: string | undefined;
            /** Event payload */
            payload?: Record<string, unknown> | undefined;
            createdAt?: string | undefined;
        }
    }
}
