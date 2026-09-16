
import type * as Mesta from "../../../index.js";

export interface UpdatePaymentMethodsResponse {
    data?: Mesta.PaymentMethod | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}
