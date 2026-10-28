
import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers.js";
import * as core from "../../../../../../core/index.js";
import * as environments from "../../../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../../../errors/index.js";
import * as Mesta from "../../../../../index.js";

export declare namespace BeneficiariesClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class BeneficiariesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<BeneficiariesClient.Options>;

    constructor(options: BeneficiariesClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Retrieves all validation rules required for creating a beneficiary, including required fields and payment information requirements.
     *
     * @param {Mesta.validationRules.GetBeneficiariesRequest} request
     * @param {BeneficiariesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.validationRules.beneficiaries.get({
     *         ownerType: "individual",
     *         country: "country"
     *     })
     */
    public get(
        request: Mesta.validationRules.GetBeneficiariesRequest,
        requestOptions?: BeneficiariesClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.validationRules.GetBeneficiariesResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mesta.validationRules.GetBeneficiariesRequest,
        requestOptions?: BeneficiariesClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.validationRules.GetBeneficiariesResponse>> {
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
                "v1/validation-rules/beneficiaries",
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
                data: _response.body as Mesta.validationRules.GetBeneficiariesResponse,
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
            "/v1/validation-rules/beneficiaries",
        );
    }

    /**
     * Retrieves the list of required documents for beneficiary verification based on country and owner type. Note that some countries may not require any documents.
     *
     * @param {Mesta.validationRules.ListDocumentTypesBeneficiariesRequest} request
     * @param {BeneficiariesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.validationRules.beneficiaries.listDocumentTypes({
     *         ownerType: "individual",
     *         country: "country"
     *     })
     */
    public listDocumentTypes(
        request: Mesta.validationRules.ListDocumentTypesBeneficiariesRequest,
        requestOptions?: BeneficiariesClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.validationRules.ListDocumentTypesBeneficiariesResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listDocumentTypes(request, requestOptions));
    }

    private async __listDocumentTypes(
        request: Mesta.validationRules.ListDocumentTypesBeneficiariesRequest,
        requestOptions?: BeneficiariesClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.validationRules.ListDocumentTypesBeneficiariesResponse>> {
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
                "v1/validation-rules/beneficiaries/document-types",
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
                data: _response.body as Mesta.validationRules.ListDocumentTypesBeneficiariesResponse,
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
            "/v1/validation-rules/beneficiaries/document-types",
        );
    }

    /**
     * Retrieves the list of supported payment types and their required fields for a beneficiary in a specific country. Use this to determine what payment information needs to be collected.
     *
     * @param {Mesta.validationRules.ListPaymentTypesBeneficiariesRequest} request
     * @param {BeneficiariesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.validationRules.beneficiaries.listPaymentTypes({
     *         ownerType: "individual",
     *         country: "country"
     *     })
     */
    public listPaymentTypes(
        request: Mesta.validationRules.ListPaymentTypesBeneficiariesRequest,
        requestOptions?: BeneficiariesClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.validationRules.ListPaymentTypesBeneficiariesResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listPaymentTypes(request, requestOptions));
    }

    private async __listPaymentTypes(
        request: Mesta.validationRules.ListPaymentTypesBeneficiariesRequest,
        requestOptions?: BeneficiariesClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.validationRules.ListPaymentTypesBeneficiariesResponse>> {
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
                "v1/validation-rules/beneficiaries/payment-types",
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
                data: _response.body as Mesta.validationRules.ListPaymentTypesBeneficiariesResponse,
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
            "/v1/validation-rules/beneficiaries/payment-types",
        );
    }

    /**
     * Retrieve a list of countries to which payments can be delivered.
     *
     * @param {BeneficiariesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.validationRules.beneficiaries.listCountries()
     */
    public listCountries(
        requestOptions?: BeneficiariesClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.validationRules.ListCountriesBeneficiariesResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listCountries(requestOptions));
    }

    private async __listCountries(
        requestOptions?: BeneficiariesClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.validationRules.ListCountriesBeneficiariesResponse>> {
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
                "v1/validation-rules/beneficiaries/countries",
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
                data: _response.body as Mesta.validationRules.ListCountriesBeneficiariesResponse,
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
            "/v1/validation-rules/beneficiaries/countries",
        );
    }
}
