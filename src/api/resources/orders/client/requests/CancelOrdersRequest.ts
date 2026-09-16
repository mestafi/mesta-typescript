
/**
 * @example
 *     {
 *         orderId: "orderId"
 *     }
 */
export interface CancelOrdersRequest {
    /** Unique identifier for the order to cancel */
    orderId: string;
    /** Optional remarks or reason for cancelling the order */
    cancellationRemarks?: string;
}
