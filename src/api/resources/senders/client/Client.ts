
import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import { mergeAdditionalBodyParameters } from "../../../../core/requestBody.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import * as Mesta from "../../../index.js";
import { AssociatesClient } from "../resources/associates/client/Client.js";
import { DepositBankAccountsClient } from "../resources/depositBankAccounts/client/Client.js";
import { DocumentsClient } from "../resources/documents/client/Client.js";
import { SourceWalletAddressesClient } from "../resources/sourceWalletAddresses/client/Client.js";
import { TermsOfServiceClient } from "../resources/termsOfService/client/Client.js";
import { UbosClient } from "../resources/ubos/client/Client.js";
import { VirtualBankAccountsClient } from "../resources/virtualBankAccounts/client/Client.js";

export declare namespace SendersClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class SendersClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SendersClient.Options>;
    protected _associates: AssociatesClient | undefined;
    protected _virtualBankAccounts: VirtualBankAccountsClient | undefined;
    protected _sourceWalletAddresses: SourceWalletAddressesClient | undefined;
    protected _ubos: UbosClient | undefined;
    protected _documents: DocumentsClient | undefined;
    protected _termsOfService: TermsOfServiceClient | undefined;
    protected _depositBankAccounts: DepositBankAccountsClient | undefined;

    constructor(options: SendersClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    public get associates(): AssociatesClient {
        return (this._associates ??= new AssociatesClient(this._options));
    }

    public get virtualBankAccounts(): VirtualBankAccountsClient {
        return (this._virtualBankAccounts ??= new VirtualBankAccountsClient(this._options));
    }

    public get sourceWalletAddresses(): SourceWalletAddressesClient {
        return (this._sourceWalletAddresses ??= new SourceWalletAddressesClient(this._options));
    }

    public get ubos(): UbosClient {
        return (this._ubos ??= new UbosClient(this._options));
    }

    public get documents(): DocumentsClient {
        return (this._documents ??= new DocumentsClient(this._options));
    }

    public get termsOfService(): TermsOfServiceClient {
        return (this._termsOfService ??= new TermsOfServiceClient(this._options));
    }

    public get depositBankAccounts(): DepositBankAccountsClient {
        return (this._depositBankAccounts ??= new DepositBankAccountsClient(this._options));
    }

    /**
     * Retrieves a list of all senders associated with a merchant.
     *
     * @param {Mesta.ListSendersRequest} request
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
     *     await client.senders.list()
     */
    public list(
        request: Mesta.ListSendersRequest = {},
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.ListSendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Mesta.ListSendersRequest = {},
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.ListSendersResponse>> {
        const { id, status, pageSize, page, sortBy, sortOrder } = request;
        const _queryParams: Record<string, unknown> = {
            id,
            status: status != null ? status : undefined,
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
                "v1/senders",
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
            return { data: _response.body as Mesta.ListSendersResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/senders");
    }

    /**
     * ## Overview
     * * Creates a new sender
     * * Supports both individual and business senders
     * * Includes additional onboarding fields used for compliance review
     * * Requirements vary by country and ownerType
     *
     * ## Validation Rules
     * * **Important**: Always check validation rules before creating a sender
     * * Validation rules endpoint: `GET /v2/validation-rules/senders`
     * * Required query parameters:
     *    * `ownerType=[individual|business]`
     *   * `country=[ISO 3166-1 alpha-2 code]`
     * * Example request:
     * ```
     * GET /v2/validation-rules/senders?ownerType=individual&country=MX
     * ```
     *
     * ## Additional v2 Notes
     * * `expectedMonthlyVolumeEstimate`, `averageTransactionSize`, `primaryCounterpartyJurisdictions`, `natureOfPayments`, and `sourceOfFunds` are required for both sender types
     * * Each value in `primaryCounterpartyJurisdictions` must be an ISO 3166-1 alpha-2 country code (for example: `US`, `IN`, `GB`)
     * * `isFinancialInstitution` and `numberOfEmployees` are required for business senders
     * * `websiteAbsenceReason` is required for business senders when `websiteUrl` is not provided
     * * If `isFinancialInstitution` is `true`, upload the FI registration proof using `POST /v1/senders/{senderId}/documents` with document type `fi_registration_proof` before calling `POST /v1/senders/{senderId}/verify`
     *
     * @param {Mesta.CreateSendersRequest} request
     * @param {SendersClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.senders.create({
     *         expectedMonthlyVolumeEstimate: 1.1,
     *         averageTransactionSize: 1.1,
     *         primaryCounterpartyJurisdictions: ["primaryCounterpartyJurisdictions"],
     *         natureOfPayments: ["payroll"],
     *         sourceOfFunds: "advance_from_director",
     *         type: "individual",
     *         firstName: "firstName",
     *         lastName: "lastName",
     *         birthDate: "2023-01-15",
     *         email: "email",
     *         phone: "phone",
     *         addresses: [{
     *                 street: "street",
     *                 city: "city",
     *                 postalCode: "12345 or 00000",
     *                 country: "country"
     *             }],
     *         identity: {
     *             documentType: "PASSPORT",
     *             countryCode: "countryCode",
     *             documentNumber: "documentNumber"
     *         },
     *         gender: "male",
     *         occupation: "accountant"
     *     })
     */
    public create(
        request: Mesta.CreateSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.CreateSendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Mesta.CreateSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.CreateSendersResponse>> {
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
                "v2/senders",
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
            return { data: _response.body as Mesta.CreateSendersResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v2/senders");
    }

    /**
     * Retrieves detailed information about a specific sender account.
     *
     * @param {Mesta.GetSendersRequest} request
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
     *     await client.senders.get({
     *         senderId: "senderId"
     *     })
     */
    public get(
        request: Mesta.GetSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.GetSendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Mesta.GetSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.GetSendersResponse>> {
        const { senderId } = request;
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
                `v1/senders/${core.url.encodePathParam(senderId)}`,
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
            return { data: _response.body as Mesta.GetSendersResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/senders/{senderId}");
    }

    /**
     * Deletes a sender account.
     *
     * @param {Mesta.DeleteSendersRequest} request
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
     *     await client.senders.delete({
     *         senderId: "senderId"
     *     })
     */
    public delete(
        request: Mesta.DeleteSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.DeleteSendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }

    private async __delete(
        request: Mesta.DeleteSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.DeleteSendersResponse>> {
        const { senderId } = request;
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
                `v1/senders/${core.url.encodePathParam(senderId)}`,
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
            return { data: _response.body as Mesta.DeleteSendersResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "DELETE", "/v1/senders/{senderId}");
    }

    /**
     * Updates an existing sender's information. Note that certain fields cannot be modified after initial creation:
     *
     * - type (individual/business)
     * - identificationNumber (for business senders)
     * - taxIdentificationNumber (for business senders)
     *
     * Before updating a sender, always check the validation rules using:
     * GET /v2/validation-rules/senders?ownerType=[individual|business]&country=[ISO 3166-1 alpha-2 code]
     *
     * @param {Mesta.UpdateSendersRequest} request
     * @param {SendersClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.senders.update({
     *         senderId: "senderId",
     *         body: {}
     *     })
     */
    public update(
        request: Mesta.UpdateSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.UpdateSendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__update(request, requestOptions));
    }

    private async __update(
        request: Mesta.UpdateSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.UpdateSendersResponse>> {
        const { senderId, body: _body } = request;
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
                `v1/senders/${core.url.encodePathParam(senderId)}`,
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
            return { data: _response.body as Mesta.UpdateSendersResponse, rawResponse: _response.rawResponse };
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "PATCH", "/v1/senders/{senderId}");
    }

    /**
     * Settles a pending sender verification with a simulated provider decision so you can drive onboarding end to end without waiting on the identity provider. Available in test environments only — disabled in production.
     *
     * Verification must already have been started via the corresponding `/verify` call; otherwise the request is rejected with `MOCK_VERIFICATION_NOT_INITIATED`. For a business sender the same result is applied to the sender's KYB and to every UBO and unlinked associate on it, matching how the provider settles them individually.
     *
     * @param {Mesta.SimulateVerificationResultSendersRequest} request
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
     *     await client.senders.simulateVerificationResult({
     *         senderId: "senderId",
     *         result: "APPROVED"
     *     })
     */
    public simulateVerificationResult(
        request: Mesta.SimulateVerificationResultSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.SimulateVerificationResultSendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__simulateVerificationResult(request, requestOptions));
    }

    private async __simulateVerificationResult(
        request: Mesta.SimulateVerificationResultSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.SimulateVerificationResultSendersResponse>> {
        const { senderId, ..._body } = request;
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
                `v1/senders/${core.url.encodePathParam(senderId)}/mock-verification-result`,
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
                data: _response.body as Mesta.SimulateVerificationResultSendersResponse,
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
            "POST",
            "/v1/senders/{senderId}/mock-verification-result",
        );
    }

    /**
     * Runs the authoritative union of base sender, country-specific, accepted-capability, and persisted UBO/associate requirements, minus canonical data already stored. If no blockers remain, it initiates the existing verification process. If requirements are incomplete, verification does not start and the API returns actionable `CAPABILITY_REQUIREMENTS_MISSING` blockers.
     *
     * @param {Mesta.VerifySendersRequest} request
     * @param {SendersClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.senders.verify({
     *         senderId: "senderId"
     *     })
     */
    public verify(
        request: Mesta.VerifySendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.VerifySendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__verify(request, requestOptions));
    }

    private async __verify(
        request: Mesta.VerifySendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.VerifySendersResponse>> {
        const { senderId, ..._body } = request;
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
                `v1/senders/${core.url.encodePathParam(senderId)}/verify`,
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
            return { data: _response.body as Mesta.VerifySendersResponse, rawResponse: _response.rawResponse };
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
            "/v1/senders/{senderId}/verify",
        );
    }

    /**
     * Retrieves the account balances for a specific sender across all supported currencies. Returns an array of currency-balance pairs for all currencies where the sender has an account.
     *
     * @param {Mesta.GetBalancesSendersRequest} request
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
     *     await client.senders.getBalances({
     *         senderId: "senderId"
     *     })
     */
    public getBalances(
        request: Mesta.GetBalancesSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.GetBalancesSendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getBalances(request, requestOptions));
    }

    private async __getBalances(
        request: Mesta.GetBalancesSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.GetBalancesSendersResponse>> {
        const { senderId } = request;
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
                `v1/senders/${core.url.encodePathParam(senderId)}/balances`,
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
            return { data: _response.body as Mesta.GetBalancesSendersResponse, rawResponse: _response.rawResponse };
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
            "/v1/senders/{senderId}/balances",
        );
    }

    /**
     * Credits a sender's deposit account with simulated funds so you can test order flows end to end without moving real money.
     *
     * **Available in test environments only.** This endpoint is disabled in production and returns `403 FORBIDDEN` there.
     *
     * The credit is applied asynchronously: a successful call only confirms that the simulated deposit was accepted. The funds land once the banking provider's webhook is processed, which normally takes a few seconds. Poll `GET /v1/senders/{senderId}/balances` to confirm the balance has moved.
     *
     * **Limits**
     *
     * - `amount` must be greater than `0` and no more than `200` per request. Repeat the call to fund larger balances.
     * - Rate limited to 10 requests per 2 hours for this endpoint, counted per source IP address. Every rejected request also consumes quota, including `401`, `403`, `400` and `404` responses.
     * - Simulated deposits are only supported for deposit accounts held with a banking provider that offers a deposit simulator. Accounts on other providers return `MOCK_DEPOSIT_NOT_SUPPORTED_FOR_ACCOUNT`.
     *
     * **Permissions**
     *
     * The API key must carry the `merchant:sender:write` permission (`merchant:*:*` also matches). Without it the request is rejected with `403 FORBIDDEN`.
     *
     * @param {Mesta.SimulateDepositSendersRequest} request
     * @param {SendersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.BadRequestError}
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.TooManyRequestsError}
     * @throws {@link Mesta.InternalServerError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.senders.simulateDeposit({
     *         senderId: "senderId",
     *         amount: 1.1,
     *         currency: "USD"
     *     })
     */
    public simulateDeposit(
        request: Mesta.SimulateDepositSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.SimulateDepositSendersResponse> {
        return core.HttpResponsePromise.fromPromise(this.__simulateDeposit(request, requestOptions));
    }

    private async __simulateDeposit(
        request: Mesta.SimulateDepositSendersRequest,
        requestOptions?: SendersClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.SimulateDepositSendersResponse>> {
        const { senderId, amount, currency } = request;
        const _queryParams: Record<string, unknown> = {
            amount,
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
                `v1/senders/${core.url.encodePathParam(senderId)}/accounts/mock-deposit`,
            ),
            method: "POST",
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
            return { data: _response.body as Mesta.SimulateDepositSendersResponse, rawResponse: _response.rawResponse };
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
                case 429:
                    throw new Mesta.TooManyRequestsError(_response.error.body as unknown, _response.rawResponse);
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
            "/v1/senders/{senderId}/accounts/mock-deposit",
        );
    }
}
