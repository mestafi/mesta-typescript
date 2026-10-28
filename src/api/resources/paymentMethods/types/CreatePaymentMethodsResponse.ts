
import type * as Mesta from "../../../index.js";

export interface CreatePaymentMethodsResponse {
    data?: Mesta.PaymentMethod | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}
