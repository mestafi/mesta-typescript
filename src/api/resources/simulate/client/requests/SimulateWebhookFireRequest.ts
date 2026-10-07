
/**
 * @example
 *     {
 *         event: "order:success",
 *         aggregateId: "00000000-0000-4000-a000-000000000006"
 *     }
 */
export interface SimulateWebhookFireRequest {
    /** A live event name, for example order:success. */
    event: string;
    /** The id of one of your objects of the event's entity type. */
    aggregateId: string;
}
