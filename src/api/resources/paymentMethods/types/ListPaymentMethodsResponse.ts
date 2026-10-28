
import type * as Mesta from "../../../index.js";

export interface ListPaymentMethodsResponse {
    data?: Mesta.PaymentMethod[] | undefined;
    total?: number | undefined;
    /** Whether there are more results available */
    hasNext?: boolean | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}
