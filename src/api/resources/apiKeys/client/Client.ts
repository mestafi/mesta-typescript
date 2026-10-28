
import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import { mergeAdditionalBodyParameters } from "../../../../core/requestBody.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import * as Mesta from "../../../index.js";

export declare namespace ApiKeysClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class ApiKeysClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ApiKeysClient.Options>;

    constructor(options: ApiKeysClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Retrieves a paginated list of API keys for the merchant.
     *
     * @param {Mesta.ListApiKeysRequest} request
     * @param {ApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.apiKeys.list()
     */
    public list(
        request: Mesta.ListApiKeysRequest = {},
        requestOptions?: ApiKeysClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.ListApiKeysResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Mesta.ListApiKeysRequest = {},
        requestOptions?: ApiKeysClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.ListApiKeysResponse>> {
        const { page, pageSize, sortBy, sortOrder, search, merchantId } = request;
        const _queryParams: Record<string, unknown> = {
            page,
            pageSize,
            sortBy: sortBy != null ? sortBy : undefined,
            sortOrder: sortOrder != null ? sortOrder : undefined,
            search,
            merchantId,
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
                "v1/api-keys",
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
            return { data: _response.body as Mesta.ListApiKeysResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/api-keys");
    }

    /**
     * Creates a new API key for the merchant. The API secret is only returned in the creation response and cannot be retrieved later.
     *
     * @param {Mesta.CreateApiKeysRequest} request
     * @param {ApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.BadRequestError}
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.apiKeys.create({
     *         name: "name",
     *         permissions: ["permissions"]
     *     })
     */
    public create(
        request: Mesta.CreateApiKeysRequest,
        requestOptions?: ApiKeysClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.CreateApiKeysResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Mesta.CreateApiKeysRequest,
        requestOptions?: ApiKeysClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.CreateApiKeysResponse>> {
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
                "v1/api-keys",
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
            return { data: _response.body as Mesta.CreateApiKeysResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v1/api-keys");
    }

    /**
     * Retrieves details of a specific API key by ID.
     *
     * @param {Mesta.GetApiKeysRequest} request
     * @param {ApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.apiKeys.get({
     *         id: "id"
     *     })
     */
    public get(
        request: Mesta.GetApiKeysRequest,
        requestOptions?: ApiKeysClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.GetApiKeysResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mesta.GetApiKeysRequest,
        requestOptions?: ApiKeysClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.GetApiKeysResponse>> {
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
                `v1/api-keys/${core.url.encodePathParam(id)}`,
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
            return { data: _response.body as Mesta.GetApiKeysResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/api-keys/{id}");
    }

    /**
     * Permanently deletes an API key. This action cannot be undone.
     *
     * @param {Mesta.DeleteApiKeysRequest} request
     * @param {ApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.apiKeys.delete({
     *         id: "id"
     *     })
     */
    public delete(
        request: Mesta.DeleteApiKeysRequest,
        requestOptions?: ApiKeysClient.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }

    private async __delete(
        request: Mesta.DeleteApiKeysRequest,
        requestOptions?: ApiKeysClient.RequestOptions,
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
                `v1/api-keys/${core.url.encodePathParam(id)}`,
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "DELETE", "/v1/api-keys/{id}");
    }

    /**
     * Updates the name and/or permissions of an existing API key.
     *
     * @param {Mesta.UpdateApiKeysRequest} request
     * @param {ApiKeysClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.apiKeys.update({
     *         id: "id"
     *     })
     */
    public update(
        request: Mesta.UpdateApiKeysRequest,
        requestOptions?: ApiKeysClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.UpdateApiKeysResponse> {
        return core.HttpResponsePromise.fromPromise(this.__update(request, requestOptions));
    }

    private async __update(
        request: Mesta.UpdateApiKeysRequest,
        requestOptions?: ApiKeysClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.UpdateApiKeysResponse>> {
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
                `v1/api-keys/${core.url.encodePathParam(id)}`,
            ),
            method: "PATCH",
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
            return { data: _response.body as Mesta.UpdateApiKeysResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "PATCH", "/v1/api-keys/{id}");
    }
}
