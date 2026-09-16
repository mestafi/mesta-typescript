
import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers.js";
import * as core from "../../../../../../core/index.js";
import * as environments from "../../../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../../../errors/index.js";
import * as Mesta from "../../../../../index.js";

export declare namespace SendersClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class SendersClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SendersClient.Options>;

    constructor(options: SendersClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Retrieves all validation rules required for creating a sender in a specific country. Use these rules to validate sender information before submission.
     *
     * @param {Mesta.validationRules.GetV1SendersRequest} request
     * @param {SendersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.validationRules.senders.getV1({
     *         ownerType: "individual",
     *         country: "country"
     *     })
     */
    public getV1(
        request: Mesta.validationRules.GetV1SendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.validationRules.GetV1SendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getV1(request, requestOptions));
    }

    private async __getV1(
        request: Mesta.validationRules.GetV1SendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.validationRules.GetV1SendersResponse>> {
        const { ownerType, country } = request;
        const _queryParams: Record<string, unknown> = {
            ownerType,
            country,
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
                "v1/validation-rules/senders",
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
                data: _response.body as Mesta.validationRules.GetV1SendersResponse,
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/validation-rules/senders");
    }

    /**
     * Retrieves validation rules for UBO information based on country and owner type. These rules specify all required fields for UBO verification.
     *
     * @param {Mesta.validationRules.GetUboRulesV1SendersRequest} request
     * @param {SendersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.validationRules.senders.getUboRulesV1({
     *         ownerType: "individual",
     *         country: "country"
     *     })
     */
    public getUboRulesV1(
        request: Mesta.validationRules.GetUboRulesV1SendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.validationRules.GetUboRulesV1SendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getUboRulesV1(request, requestOptions));
    }

    private async __getUboRulesV1(
        request: Mesta.validationRules.GetUboRulesV1SendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.validationRules.GetUboRulesV1SendersResponse>> {
        const { ownerType, country } = request;
        const _queryParams: Record<string, unknown> = {
            ownerType,
            country,
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
                "v1/validation-rules/senders/ubo",
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
                data: _response.body as Mesta.validationRules.GetUboRulesV1SendersResponse,
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
            "/v1/validation-rules/senders/ubo",
        );
    }

    /**
     * Retrieves the list of required documents for sender verification. This includes business registration documents and identity proofs.
     *
     * @param {Mesta.validationRules.ListDocumentTypesV1SendersRequest} request
     * @param {SendersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.validationRules.senders.listDocumentTypesV1({
     *         ownerType: "individual",
     *         country: "country"
     *     })
     */
    public listDocumentTypesV1(
        request: Mesta.validationRules.ListDocumentTypesV1SendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.validationRules.ListDocumentTypesV1SendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listDocumentTypesV1(request, requestOptions));
    }

    private async __listDocumentTypesV1(
        request: Mesta.validationRules.ListDocumentTypesV1SendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.validationRules.ListDocumentTypesV1SendersResponse>> {
        const { ownerType, country } = request;
        const _queryParams: Record<string, unknown> = {
            ownerType,
            country,
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
                "v1/validation-rules/senders/document-types",
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
                data: _response.body as Mesta.validationRules.ListDocumentTypesV1SendersResponse,
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
            "/v1/validation-rules/senders/document-types",
        );
    }

    /**
     * Retrieves all validation rules required for creating a sender in a specific country. V2 adds structured `supportedDocumentTypes` on identity fields, indicating which document types are available per country and their file upload requirements. The `documentNumber`, `documentFront`, and `documentBack` nested fields are removed as their requirements are conveyed by `supportedDocumentTypes`.
     *
     * @param {Mesta.validationRules.GetV2SendersRequest} request
     * @param {SendersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.validationRules.senders.getV2({
     *         ownerType: "individual",
     *         country: "country"
     *     })
     */
    public getV2(
        request: Mesta.validationRules.GetV2SendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.validationRules.GetV2SendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getV2(request, requestOptions));
    }

    private async __getV2(
        request: Mesta.validationRules.GetV2SendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.validationRules.GetV2SendersResponse>> {
        const { ownerType, country } = request;
        const _queryParams: Record<string, unknown> = {
            ownerType,
            country,
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
                "v2/validation-rules/senders",
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
                data: _response.body as Mesta.validationRules.GetV2SendersResponse,
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
                default:
                    throw new errors.MestaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v2/validation-rules/senders");
    }

    /**
     * Retrieves validation rules for UBO (Ultimate Beneficial Owner) information. V2 adds structured `supportedDocumentTypes` on the identity documentType field, indicating available document types per country and their file upload requirements.
     *
     * @param {Mesta.validationRules.GetUboRulesV2SendersRequest} request
     * @param {SendersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.BadRequestError}
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.validationRules.senders.getUboRulesV2({
     *         ownerType: "business",
     *         country: "country"
     *     })
     */
    public getUboRulesV2(
        request: Mesta.validationRules.GetUboRulesV2SendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.validationRules.GetUboRulesV2SendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getUboRulesV2(request, requestOptions));
    }

    private async __getUboRulesV2(
        request: Mesta.validationRules.GetUboRulesV2SendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.validationRules.GetUboRulesV2SendersResponse>> {
        const { ownerType, country } = request;
        const _queryParams: Record<string, unknown> = {
            ownerType,
            country,
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
                "v2/validation-rules/senders/ubo",
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
                data: _response.body as Mesta.validationRules.GetUboRulesV2SendersResponse,
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
            "/v2/validation-rules/senders/ubo",
        );
    }

    /**
     * Retrieves the list of required documents for sender verification. This includes business registration documents and identity proofs. Same as V1.
     *
     * @param {Mesta.validationRules.ListDocumentTypesV2SendersRequest} request
     * @param {SendersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.validationRules.senders.listDocumentTypesV2({
     *         ownerType: "individual",
     *         country: "country"
     *     })
     */
    public listDocumentTypesV2(
        request: Mesta.validationRules.ListDocumentTypesV2SendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.validationRules.ListDocumentTypesV2SendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listDocumentTypesV2(request, requestOptions));
    }

    private async __listDocumentTypesV2(
        request: Mesta.validationRules.ListDocumentTypesV2SendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.validationRules.ListDocumentTypesV2SendersResponse>> {
        const { ownerType, country } = request;
        const _queryParams: Record<string, unknown> = {
            ownerType,
            country,
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
                "v2/validation-rules/senders/document-types",
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
                data: _response.body as Mesta.validationRules.ListDocumentTypesV2SendersResponse,
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
            "/v2/validation-rules/senders/document-types",
        );
    }

    /**
     * Retrieve a list of countries from which senders can originate payments.
     *
     * @param {SendersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.validationRules.senders.listCountries()
     */
    public listCountries(
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.validationRules.ListCountriesSendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listCountries(requestOptions));
    }

    private async __listCountries(
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.validationRules.ListCountriesSendersResponse>> {
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
                "v1/validation-rules/senders/countries",
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
                data: _response.body as Mesta.validationRules.ListCountriesSendersResponse,
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
            "/v1/validation-rules/senders/countries",
        );
    }
}
