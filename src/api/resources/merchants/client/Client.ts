
import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import * as Mesta from "../../../index.js";
import { AccountsClient } from "../resources/accounts/client/Client.js";
import { FiatDepositsClient } from "../resources/fiatDeposits/client/Client.js";
import { SourceWalletAddressesClient } from "../resources/sourceWalletAddresses/client/Client.js";
import { StablecoinDepositsClient } from "../resources/stablecoinDeposits/client/Client.js";
import { TransactionsClient } from "../resources/transactions/client/Client.js";

export declare namespace MerchantsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class MerchantsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<MerchantsClient.Options>;
    protected _accounts: AccountsClient | undefined;
    protected _transactions: TransactionsClient | undefined;
    protected _stablecoinDeposits: StablecoinDepositsClient | undefined;
    protected _fiatDeposits: FiatDepositsClient | undefined;
    protected _sourceWalletAddresses: SourceWalletAddressesClient | undefined;

    constructor(options: MerchantsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    public get accounts(): AccountsClient {
        return (this._accounts ??= new AccountsClient(this._options));
    }

    public get transactions(): TransactionsClient {
        return (this._transactions ??= new TransactionsClient(this._options));
    }

    public get stablecoinDeposits(): StablecoinDepositsClient {
        return (this._stablecoinDeposits ??= new StablecoinDepositsClient(this._options));
    }

    public get fiatDeposits(): FiatDepositsClient {
        return (this._fiatDeposits ??= new FiatDepositsClient(this._options));
    }

    public get sourceWalletAddresses(): SourceWalletAddressesClient {
        return (this._sourceWalletAddresses ??= new SourceWalletAddressesClient(this._options));
    }

    /**
     * Retrieves detailed information about a specific merchant, including account details and UBO (Ultimate Beneficial Owner) information.
     *
     * @param {Mesta.GetMerchantsRequest} request
     * @param {MerchantsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.merchants.get({
     *         merchantId: "merchantId"
     *     })
     */
    public get(
        request: Mesta.GetMerchantsRequest,
        requestOptions?: MerchantsClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.GetMerchantsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mesta.GetMerchantsRequest,
        requestOptions?: MerchantsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.GetMerchantsResponse>> {
        const { merchantId } = request;
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
                `v1/merchants/${core.url.encodePathParam(merchantId)}`,
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
            return { data: _response.body as Mesta.GetMerchantsResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/merchants/{merchantId}");
    }

    /**
     * Records the merchant's acceptance of Terms of Service. Captures acceptance timestamp, user identity, and IP address.
     *
     * @param {Mesta.AcceptTermsMerchantsRequest} request
     * @param {MerchantsClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.merchants.acceptTerms({
     *         merchantId: "merchantId"
     *     })
     */
    public acceptTerms(
        request: Mesta.AcceptTermsMerchantsRequest,
        requestOptions?: MerchantsClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.AcceptTermsMerchantsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__acceptTerms(request, requestOptions));
    }

    private async __acceptTerms(
        request: Mesta.AcceptTermsMerchantsRequest,
        requestOptions?: MerchantsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.AcceptTermsMerchantsResponse>> {
        const { merchantId } = request;
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
                `v1/merchants/${core.url.encodePathParam(merchantId)}/accept-terms`,
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
            return { data: _response.body as Mesta.AcceptTermsMerchantsResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/v1/merchants/{merchantId}/accept-terms",
        );
    }

    /**
     * Retrieves the current balances for a merchant across all currencies and stablecoins.
     *
     * @param {Mesta.GetBalancesMerchantsRequest} request
     * @param {MerchantsClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.merchants.getBalances({
     *         merchantId: "merchantId"
     *     })
     */
    public getBalances(
        request: Mesta.GetBalancesMerchantsRequest,
        requestOptions?: MerchantsClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.GetBalancesMerchantsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getBalances(request, requestOptions));
    }

    private async __getBalances(
        request: Mesta.GetBalancesMerchantsRequest,
        requestOptions?: MerchantsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.GetBalancesMerchantsResponse>> {
        const { merchantId } = request;
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
                `v1/merchants/${core.url.encodePathParam(merchantId)}/balances`,
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
            return { data: _response.body as Mesta.GetBalancesMerchantsResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/v1/merchants/{merchantId}/balances",
        );
    }
}
