
import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import * as Mesta from "../../../index.js";

export declare namespace SandboxClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class SandboxClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SandboxClient.Options>;

    constructor(options: SandboxClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * The sandbox's status, deadline, `emailVerified`, `executionPaused`, `pauseMessage`, all seven `counts`, the `wallets` state (`unavailable` until test-network wallets are offered), the progress of the sample data (`seed.status`, `seed.step`, `seed.steps`, `seed.error`), the `fixtures` block once the sample data is complete, and its keys by id with `kind`, `expiresAt` and `lastUsedAt`; never an API key secret. The `fixtures` include the retrievable webhook signing key. Requires `merchant:sandbox:read` (included in the initial standard integration key; narrower keys must request it) or a session of the sandbox's merchant. Another sandbox's id is 404. A failed sandbox's keys can read this route for 24 hours and nothing else.
     *
     * @param {Mesta.GetSandboxRequest} request
     * @param {SandboxClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.TooManyRequestsError}
     * @throws {@link Mesta.ServiceUnavailableError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.sandbox.get({
     *         id: "id"
     *     })
     */
    public get(
        request: Mesta.GetSandboxRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.GetSandboxResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mesta.GetSandboxRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.GetSandboxResponse>> {
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
                `v1/sandbox/sessions/${core.url.encodePathParam(id)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: _response.body as Mesta.GetSandboxResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Mesta.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 403:
                    throw new Mesta.ForbiddenError(_response.error.body as unknown, _response.rawResponse);
                case 404:
                    throw new Mesta.NotFoundError(_response.error.body as unknown, _response.rawResponse);
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/sandbox/sessions/{id}");
    }

    /**
     * Marks the sandbox deleted: keys revoked, users signed out, running orders stopped, every row purged within 24 hours. The owner's email is free to create again at once. Requires `merchant:sandbox:write`; a key or a session while the sandbox is unclaimed, a session once it is claimed.
     *
     * @param {Mesta.DeleteSandboxRequest} request
     * @param {SandboxClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.sandbox.delete({
     *         id: "id"
     *     })
     */
    public delete(
        request: Mesta.DeleteSandboxRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }

    private async __delete(
        request: Mesta.DeleteSandboxRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
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
                `v1/sandbox/sessions/${core.url.encodePathParam(id)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: undefined, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "DELETE", "/v1/sandbox/sessions/{id}");
    }

    /**
     * Restores balances and removes your orders, quotes and deposits; the sample senders and beneficiaries stay. Stops running orders, deletes the orders, quotes and deposits and the senders, beneficiaries and payment methods you created, deletes the ledger history, restores altered or deleted sample objects under their original ids and adds the sample deposits and orders again. Reset leaves webhook endpoints, their URLs, their events and the signing key exactly as you set them, and clears the delivery-log entries of the orders, quotes and deposits it removes. Keys, wallets and deposit instructions are untouched. Status reads remain available; every other request answers 409 SANDBOX_RESETTING until it finishes, in seconds. Requires `merchant:sandbox:write`, key or session; no step-up. 50 per sandbox per rolling day.
     *
     * @param {Mesta.ResetSandboxRequest} request
     * @param {SandboxClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.sandbox.reset({
     *         id: "id"
     *     })
     */
    public reset(
        request: Mesta.ResetSandboxRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.ResetSandboxResponse> {
        return core.HttpResponsePromise.fromPromise(this.__reset(request, requestOptions));
    }

    private async __reset(
        request: Mesta.ResetSandboxRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.ResetSandboxResponse>> {
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
                `v1/sandbox/sessions/${core.url.encodePathParam(id)}/reset`,
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
            return { data: _response.body as Mesta.ResetSandboxResponse, rawResponse: _response.rawResponse };
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
            "/v1/sandbox/sessions/{id}/reset",
        );
    }

    /**
     * Test-network wallets are coming soon. Until they are offered, this route answers 409 NOT_AVAILABLE_IN_SANDBOX without Retry-After, and the session read reports `wallets.status` `unavailable`. Once they are offered, it creates your merchant's wallet when the wallet was skipped while the sample data was added: attempted once, and counted against the sandbox environment's daily wallet ceiling. Requires `merchant:sandbox:write`, key or session.
     *
     * @param {SandboxClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.sandbox.createWallets()
     */
    public createWallets(
        requestOptions?: SandboxClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.CreateWalletsSandboxResponse> {
        return core.HttpResponsePromise.fromPromise(this.__createWallets(requestOptions));
    }

    private async __createWallets(
        requestOptions?: SandboxClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.CreateWalletsSandboxResponse>> {
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
                "v1/sandbox/wallets",
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
            return { data: _response.body as Mesta.CreateWalletsSandboxResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v1/sandbox/wallets");
    }

    /**
     * Test-network wallets are coming soon. Until they are offered, this route answers 409 NOT_AVAILABLE_IN_SANDBOX without Retry-After. Once they are offered, it creates the sender's wallet, once per sender; five senders per sandbox can hold wallets and the sixth answers 409 SANDBOX_CAP_EXCEEDED. The sender must be yours (404 otherwise). Requires `merchant:sender:write`, key or session.
     *
     * @param {Mesta.CreateSenderWalletsSandboxRequest} request
     * @param {SandboxClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.sandbox.createSenderWallets({
     *         id: "id"
     *     })
     */
    public createSenderWallets(
        request: Mesta.CreateSenderWalletsSandboxRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.CreateSenderWalletsSandboxResponse> {
        return core.HttpResponsePromise.fromPromise(this.__createSenderWallets(request, requestOptions));
    }

    private async __createSenderWallets(
        request: Mesta.CreateSenderWalletsSandboxRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.CreateSenderWalletsSandboxResponse>> {
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
                `v1/sandbox/senders/${core.url.encodePathParam(id)}/wallets`,
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
            return {
                data: _response.body as Mesta.CreateSenderWalletsSandboxResponse,
                rawResponse: _response.rawResponse,
            };
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
            "/v1/sandbox/senders/{id}/wallets",
        );
    }
}
