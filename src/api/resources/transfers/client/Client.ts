
import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import { mergeAdditionalBodyParameters } from "../../../../core/requestBody.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import * as Mesta from "../../../index.js";

export declare namespace TransfersClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class TransfersClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TransfersClient.Options>;

    constructor(options: TransfersClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Creates an internal transfer that moves funds between two verified senders belonging to your merchant account. Funds move on Mesta's internal ledger from the source sender's USD balance to the recipient sender's USD balance — no external payment rails are involved.
     *
     * > 🚧 Limited availability — enabled on request only
     * >
     * > Internal transfers are **not enabled by default**. This capability is only enabled for select merchants and approved use cases. To discuss enabling internal transfers for your account, please reach out to our [Support Team](mailto:support@mesta.xyz).
     *
     * **Flow**
     * 1. Create an internal quote via `POST /v1/quotes` with `transferType: "internal"`, `sourceCurrency: "USD"` and `targetCurrency: "USD"`.
     * 2. Call this endpoint with the quote id as `acceptedQuoteId` before the quote expires. A quote can fund at most one transfer.
     *
     * Internal transfers are order-backed: the response is a standard order with `transferType: "internal"`, the transfer appears in `GET /v1/orders` and `GET /v1/orders/{orderId}`, and it emits the standard order webhook events. The lifecycle is `created` → `funds_received` → `success`.
     *
     * **Requirements**
     * - Both senders must belong to your merchant account and be verified and active.
     * - Both senders must be enabled for internal transfers (USD).
     * - The source sender's USD balance must cover the quote's gross source amount (amount + fees).
     * - The source and recipient sender must be different (self-transfers are rejected).
     *
     * @param {Mesta.CreateTransfersRequest} request
     * @param {TransfersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.BadRequestError}
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.transfers.create({
     *         senderId: "877157e3-5433-4a17-b89e-92bb2709fc44",
     *         beneficiarySenderId: "3f1f8dcb-42a5-4c46-a41b-2f7f2f6a9f10",
     *         acceptedQuoteId: "ad0d23ef-8482-47a1-bb08-d2556f4347e5"
     *     })
     */
    public create(
        request: Mesta.CreateTransfersRequest,
        requestOptions?: TransfersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.CreateTransfersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Mesta.CreateTransfersRequest,
        requestOptions?: TransfersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.CreateTransfersResponse>> {
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            mergeOnlyDefinedHeaders({ "x-api-secret": requestOptions?.apiSecret ?? this._options?.apiSecret }),
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MestaEnvironment.Production,
                "v1/transfers",
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(request, requestOptions?.additionalBodyParameters),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: _response.body as Mesta.CreateTransfersResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Mesta.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 401:
                    throw new Mesta.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 403:
                    throw new Mesta.ForbiddenError(_response.error.body as unknown, _response.rawResponse);
                case 404:
                    throw new Mesta.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Mesta.InternalServerError(
                        _response.error.body as Mesta.ErrorResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.MestaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v1/transfers");
    }
}
