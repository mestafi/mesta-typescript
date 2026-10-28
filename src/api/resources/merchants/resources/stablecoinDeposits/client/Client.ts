
import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers.js";
import * as core from "../../../../../../core/index.js";
import * as environments from "../../../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../../../errors/index.js";
import * as Mesta from "../../../../../index.js";

export declare namespace StablecoinDepositsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class StablecoinDepositsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<StablecoinDepositsClient.Options>;

    constructor(options: StablecoinDepositsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Retrieve a paginated list of stablecoin deposits for a merchant. Supports filtering by currency, status, sender, and risk level.
     *
     * @param {Mesta.merchants.ListStablecoinDepositsRequest} request
     * @param {StablecoinDepositsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.BadRequestError}
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.merchants.stablecoinDeposits.list({
     *         search: "abc123",
     *         merchantId: "550e8400-e29b-41d4-a716-446655440000",
     *         senderId: "550e8400-e29b-41d4-a716-446655440001",
     *         sourceWalletAddress: "0x1234567890abcdef1234567890abcdef12345678",
     *         depositWalletAddressId: "550e8400-e29b-41d4-a716-446655440002"
     *     })
     */
    public list(
        request: Mesta.merchants.ListStablecoinDepositsRequest = {},
        requestOptions?: StablecoinDepositsClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.merchants.ListStablecoinDepositsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Mesta.merchants.ListStablecoinDepositsRequest = {},
        requestOptions?: StablecoinDepositsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.merchants.ListStablecoinDepositsResponse>> {
        const {
            page,
            pageSize,
            sortBy,
            sortOrder,
            search,
            currency,
            merchantId,
            senderId,
            status,
            swaRiskLevel,
            sourceWalletAddress,
            depositWalletAddressId,
            isPooled,
        } = request;
        const _queryParams: Record<string, unknown> = {
            page,
            pageSize,
            sortBy: sortBy != null ? sortBy : undefined,
            sortOrder: sortOrder != null ? sortOrder : undefined,
            search,
            currency: currency != null ? currency : undefined,
            merchantId,
            senderId,
            status: status != null ? status : undefined,
            swaRiskLevel: swaRiskLevel != null ? swaRiskLevel : undefined,
            sourceWalletAddress,
            depositWalletAddressId,
            isPooled,
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
                "v1/merchant/stablecoin-deposits",
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
                data: _response.body as Mesta.merchants.ListStablecoinDepositsResponse,
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
            "/v1/merchant/stablecoin-deposits",
        );
    }

    /**
     * Retrieve a specific stablecoin deposit by its ID.
     *
     * @param {Mesta.merchants.GetStablecoinDepositsRequest} request
     * @param {StablecoinDepositsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.merchants.stablecoinDeposits.get({
     *         id: "550e8400-e29b-41d4-a716-446655440000"
     *     })
     */
    public get(
        request: Mesta.merchants.GetStablecoinDepositsRequest,
        requestOptions?: StablecoinDepositsClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.merchants.GetStablecoinDepositsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mesta.merchants.GetStablecoinDepositsRequest,
        requestOptions?: StablecoinDepositsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.merchants.GetStablecoinDepositsResponse>> {
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
                `v1/merchant/stablecoin-deposits/${core.url.encodePathParam(id)}`,
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
                data: _response.body as Mesta.merchants.GetStablecoinDepositsResponse,
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
            "/v1/merchant/stablecoin-deposits/{id}",
        );
    }
}
