
import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import { mergeAdditionalBodyParameters } from "../../../../core/requestBody.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import * as Mesta from "../../../index.js";

export declare namespace SimulateClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class SimulateClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SimulateClient.Options>;

    constructor(options: SimulateClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Writes a settled or rejected deposit for a sender or your merchant, fiat or stablecoin, with its ledger entries and its `fiat_deposit:*` or `stablecoin_deposit:*` event. A settled deposit raises the balance when the call returns. The owner must be yours (404 otherwise). Budget: 50 calls and 500,000 currency units per sandbox per rolling day (409 SANDBOX_CAP_EXCEEDED above). Requires `merchant:sender:write` for a sender and `merchant:sandbox:write` for your own merchant (ownerType merchant); a portal session of the merchant satisfies either. Sandbox only. Guide: https://docs.mesta.xyz/docs/funding-test-senders.
     *
     * @param {Mesta.SimulateDepositRequest} request
     * @param {SimulateClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.BadRequestError}
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.ConflictError}
     * @throws {@link Mesta.TooManyRequestsError}
     * @throws {@link Mesta.ServiceUnavailableError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.simulate.deposit({
     *         ownerType: "sender",
     *         ownerId: "00000000-0000-4000-a000-000000000001",
     *         currency: "USD",
     *         amount: "500.00",
     *         outcome: "settled"
     *     })
     *
     * @example
     *     await client.simulate.deposit({
     *         ownerType: "sender",
     *         ownerId: "00000000-0000-4000-a000-000000000001",
     *         currency: "USDC_POL",
     *         amount: "500.123456",
     *         outcome: "settled"
     *     })
     */
    public deposit(
        request: Mesta.SimulateDepositRequest,
        requestOptions?: SimulateClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.SimulateDepositResponse> {
        return core.HttpResponsePromise.fromPromise(this.__deposit(request, requestOptions));
    }

    private async __deposit(
        request: Mesta.SimulateDepositRequest,
        requestOptions?: SimulateClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.SimulateDepositResponse>> {
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
                "v1/simulate/deposits",
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
            return { data: _response.body as Mesta.SimulateDepositResponse, rawResponse: _response.rawResponse };
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
                case 409:
                    throw new Mesta.ConflictError(_response.error.body as unknown, _response.rawResponse);
                case 429:
                    throw new Mesta.TooManyRequestsError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Mesta.ServiceUnavailableError(
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v1/simulate/deposits");
    }

    /**
     * Stops the order's running workflow, moves the order to the given status and publishes the matching `order:*` event (none for need_review, payment_submitted, refund_in_progress and refunded). `reasonCode` is required for cancelled and rejected and must come from the catalogue; the remark is never free text. The order must be yours (404 otherwise). Shares a budget of 200 calls per sandbox per rolling day with POST /v1/simulate/webhooks/fire. Requires `merchant:order:write`. Sandbox only.
     *
     * @param {Mesta.SimulateOrderTransitionRequest} request
     * @param {SimulateClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.BadRequestError}
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.ConflictError}
     * @throws {@link Mesta.TooManyRequestsError}
     * @throws {@link Mesta.ServiceUnavailableError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.simulate.transitionOrder({
     *         id: "id",
     *         status: "rejected",
     *         reasonCode: "compliance_declined"
     *     })
     */
    public transitionOrder(
        request: Mesta.SimulateOrderTransitionRequest,
        requestOptions?: SimulateClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.SimulateOrderTransitionResponse> {
        return core.HttpResponsePromise.fromPromise(this.__transitionOrder(request, requestOptions));
    }

    private async __transitionOrder(
        request: Mesta.SimulateOrderTransitionRequest,
        requestOptions?: SimulateClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.SimulateOrderTransitionResponse>> {
        const { id, ..._body } = request;
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
                `v1/simulate/orders/${core.url.encodePathParam(id)}/transition`,
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(_body, requestOptions?.additionalBodyParameters),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: _response.body as Mesta.SimulateOrderTransitionResponse,
                rawResponse: _response.rawResponse,
            };
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
                case 409:
                    throw new Mesta.ConflictError(_response.error.body as unknown, _response.rawResponse);
                case 429:
                    throw new Mesta.TooManyRequestsError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Mesta.ServiceUnavailableError(
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

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/v1/simulate/orders/{id}/transition",
        );
    }

    /**
     * Accepts the sender's pending terms of service and publishes `sender:tos_accepted`, in place of the link a real sender would open. The sender must be yours (404 otherwise). Requires `merchant:sender:write`. Sandbox only.
     *
     * @param {Mesta.AcceptSenderTermsSimulateRequest} request
     * @param {SimulateClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.ConflictError}
     * @throws {@link Mesta.TooManyRequestsError}
     * @throws {@link Mesta.ServiceUnavailableError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.simulate.acceptSenderTerms({
     *         id: "id"
     *     })
     */
    public acceptSenderTerms(
        request: Mesta.AcceptSenderTermsSimulateRequest,
        requestOptions?: SimulateClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.SimulateTosAcceptResponse> {
        return core.HttpResponsePromise.fromPromise(this.__acceptSenderTerms(request, requestOptions));
    }

    private async __acceptSenderTerms(
        request: Mesta.AcceptSenderTermsSimulateRequest,
        requestOptions?: SimulateClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.SimulateTosAcceptResponse>> {
        const { id } = request;
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
                `v1/simulate/senders/${core.url.encodePathParam(id)}/tos-accept`,
            ),
            method: "POST",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: _response.body as Mesta.SimulateTosAcceptResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Mesta.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 403:
                    throw new Mesta.ForbiddenError(_response.error.body as unknown, _response.rawResponse);
                case 404:
                    throw new Mesta.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                case 409:
                    throw new Mesta.ConflictError(_response.error.body as unknown, _response.rawResponse);
                case 429:
                    throw new Mesta.TooManyRequestsError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Mesta.ServiceUnavailableError(
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

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/v1/simulate/senders/{id}/tos-accept",
        );
    }

    /**
     * Publishes a real external event again for one of your objects, so the whole pipeline runs: queueing, signing, delivery and the delivery log. Counts against the sandbox's daily delivery budget and shares a budget of 200 calls per sandbox per rolling day with `POST /v1/simulate/orders/{id}/transition`. Requires `merchant:webhook-events:replay`. Sandbox only. Outbound webhook deliveries (not this HTTP response) carry `Mesta-Signature: t=<Unix seconds>,v1=<signature>` on both environments, where the signature is a lowercase hex HMAC-SHA256 over `${t}.` followed by the raw body bytes. Reject a t more than 300 seconds from the receiver clock and compare signatures in constant time. Each retry and resend has a new t and signature. Sandbox delivery bodies carry a top-level `environment`, set to `sandbox` and inside the signed bytes; production bodies carry none until the announced cutover date, then `production`. After verifying the signature, a production endpoint accepts an event with no `environment` or with `production` and rejects any other value, and a sandbox endpoint accepts only `sandbox`, so the same check keeps working through the cutover; use one endpoint and one signing key per environment. `X-Webhook-Signature`, a lowercase hex HMAC-SHA256 of the raw body alone, is kept for existing production integrations; its sunset will be announced. `X-Mesta-Plane: sandbox` is sent only on sandbox deliveries and is absent on production. Sandbox deliveries make three attempts (two retries); production keeps five attempts.
     *
     * @param {Mesta.SimulateWebhookFireRequest} request
     * @param {SimulateClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.BadRequestError}
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.ConflictError}
     * @throws {@link Mesta.TooManyRequestsError}
     * @throws {@link Mesta.ServiceUnavailableError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.simulate.fireWebhook({
     *         event: "order:success",
     *         aggregateId: "00000000-0000-4000-a000-000000000006"
     *     })
     */
    public fireWebhook(
        request: Mesta.SimulateWebhookFireRequest,
        requestOptions?: SimulateClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.SimulateWebhookFireResponse> {
        return core.HttpResponsePromise.fromPromise(this.__fireWebhook(request, requestOptions));
    }

    private async __fireWebhook(
        request: Mesta.SimulateWebhookFireRequest,
        requestOptions?: SimulateClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.SimulateWebhookFireResponse>> {
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
                "v1/simulate/webhooks/fire",
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
            return { data: _response.body as Mesta.SimulateWebhookFireResponse, rawResponse: _response.rawResponse };
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
                case 409:
                    throw new Mesta.ConflictError(_response.error.body as unknown, _response.rawResponse);
                case 429:
                    throw new Mesta.TooManyRequestsError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Mesta.ServiceUnavailableError(
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v1/simulate/webhooks/fire");
    }
}
