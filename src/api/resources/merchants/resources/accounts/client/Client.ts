
import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers.js";
import * as core from "../../../../../../core/index.js";
import * as environments from "../../../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../../../errors/index.js";
import * as Mesta from "../../../../../index.js";

export declare namespace AccountsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class AccountsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AccountsClient.Options>;

    constructor(options: AccountsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Retrieve the list of merchant accounts.
     *
     * @param {Mesta.merchants.ListAccountsRequest} request
     * @param {AccountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.merchants.accounts.list()
     */
    public list(
        request: Mesta.merchants.ListAccountsRequest = {},
        requestOptions?: AccountsClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.merchants.ListAccountsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Mesta.merchants.ListAccountsRequest = {},
        requestOptions?: AccountsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.merchants.ListAccountsResponse>> {
        const { pageSize, page, sortBy, sortOrder } = request;
        const _queryParams: Record<string, unknown> = {
            pageSize,
            page,
            sortBy: sortBy != null ? sortBy : undefined,
            sortOrder: sortOrder != null ? sortOrder : undefined,
        };
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
                "v1/merchant/accounts",
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return { data: _response.body as Mesta.merchants.ListAccountsResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/merchant/accounts");
    }

    /**
     * Retrieve the current balances for all merchant accounts across different currencies.
     *
     * @param {AccountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.merchants.accounts.listBalances()
     */
    public listBalances(
        requestOptions?: AccountsClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.merchants.ListBalancesAccountsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listBalances(requestOptions));
    }

    private async __listBalances(
        requestOptions?: AccountsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.merchants.ListBalancesAccountsResponse>> {
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
                "v1/merchant/accounts/balances",
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
            return {
                data: _response.body as Mesta.merchants.ListBalancesAccountsResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Mesta.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 403:
                    throw new Mesta.ForbiddenError(_response.error.body as unknown, _response.rawResponse);
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

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/v1/merchant/accounts/balances",
        );
    }

    /**
     * Retrieve the current balances for all senders, optionally filtered by currency.
     *
     * @param {Mesta.merchants.ListSenderBalancesAccountsRequest} request
     * @param {AccountsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.merchants.accounts.listSenderBalances({
     *         currency: "USD"
     *     })
     */
    public listSenderBalances(
        request: Mesta.merchants.ListSenderBalancesAccountsRequest,
        requestOptions?: AccountsClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.merchants.ListSenderBalancesAccountsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listSenderBalances(request, requestOptions));
    }

    private async __listSenderBalances(
        request: Mesta.merchants.ListSenderBalancesAccountsRequest,
        requestOptions?: AccountsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.merchants.ListSenderBalancesAccountsResponse>> {
        const { currency } = request;
        const _queryParams: Record<string, unknown> = {
            currency,
        };
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
                "v1/merchant/accounts/senders/balances",
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: _response.body as Mesta.merchants.ListSenderBalancesAccountsResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Mesta.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 403:
                    throw new Mesta.ForbiddenError(_response.error.body as unknown, _response.rawResponse);
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

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/v1/merchant/accounts/senders/balances",
        );
    }
}
