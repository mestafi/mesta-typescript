
import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as core from "../../../../core/index.js";
import { mergeAdditionalBodyParameters } from "../../../../core/requestBody.js";
import * as environments from "../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../errors/index.js";
import * as Mesta from "../../../index.js";
import { ClaimsClient } from "../resources/claims/client/Client.js";

export declare namespace SandboxClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class SandboxClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SandboxClient.Options>;
    protected _claims: ClaimsClient | undefined;

    constructor(options: SandboxClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    public get claims(): ClaimsClient {
        return (this._claims ??= new ClaimsClient(this._options));
    }

    /**
     * Returns a proof-of-work challenge for POST /v1/sandbox/sessions. No authentication. Rate-limited per network address (60 per 5 minutes). Solve it by counting `number` from 0 until sha256(salt + number) equals `challenge`; the reference solvers are at https://docs.mesta.xyz/docs/sandbox-create. The challenge is valid for 300 seconds and can be redeemed once. Not runnable from this page: the solution must be computed.
     *
     * @param {SandboxClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.TooManyRequestsError}
     * @throws {@link Mesta.ServiceUnavailableError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.sandbox.getChallenge()
     */
    public getChallenge(
        requestOptions?: SandboxClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.GetChallengeSandboxResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getChallenge(requestOptions));
    }

    private async __getChallenge(
        requestOptions?: SandboxClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.GetChallengeSandboxResponse>> {
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            this._options?.headers,
            mergeOnlyDefinedHeaders({ "x-api-secret": requestOptions?.apiSecret ?? this._options?.apiSecret }),
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MestaEnvironment.Production,
                "v1/sandbox/challenge",
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
            return { data: _response.body as Mesta.GetChallengeSandboxResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 403:
                    throw new Mesta.ForbiddenError(_response.error.body as unknown, _response.rawResponse);
                case 429:
                    throw new Mesta.TooManyRequestsError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Mesta.ServiceUnavailableError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.MestaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/v1/sandbox/challenge");
    }

    /**
     * Creates a sandbox from a solved challenge: a merchant, one standard key pair and the terms acceptance are written and returned at once with 201; the sample senders, beneficiaries, deposits and orders are added afterwards as a job whose progress GET /v1/sandbox/sessions/{id} reports. The API secret and the claim URL are returned once and never stored; store the response the moment it arrives. No authentication and no Idempotency-Key: the redeemed challenge is the replay handle, and re-presenting it within 24 hours answers 409 CHALLENGE_USED with the sandboxId it produced. Checks run in this order: the provisioning switch (503), the body and country (400 VALIDATION_FAILED, 409 NOT_AVAILABLE_IN_SANDBOX or 422 TERMS_NOT_ACCEPTED), the stateless solution screen (400 or 410), the creation caps (429), then single-use solution redemption (400, 410 or 409). An unclaimed sandbox expires seven days after creation unless someone opens claimUrl and verifies an email address. Not runnable from this page: the solution must be computed.
     *
     * @param {Mesta.CreateSandboxSessionRequest} request
     * @param {SandboxClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.BadRequestError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.ConflictError}
     * @throws {@link Mesta.GoneError}
     * @throws {@link Mesta.UnprocessableEntityError}
     * @throws {@link Mesta.TooManyRequestsError}
     * @throws {@link Mesta.ServiceUnavailableError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.sandbox.create({
     *         challenge: {
     *             challenge: "c107eca74592b0fdfd64956fc1ae13a283519c10e796a9a0e84606efe3f55966",
     *             salt: "00112233445566778899aabbccddeeff.1790672400000",
     *             maxnumber: 2097152,
     *             expiresAt: "2026-09-29T09:00:00Z",
     *             signature: "9d2e_example",
     *             number: 12345
     *         },
     *         acceptTerms: true,
     *         name: "Northwind Cross-Border Inc.",
     *         country: "US",
     *         depositSource: "sender"
     *     })
     */
    public create(
        request: Mesta.CreateSandboxSessionRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.CreateSandboxResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Mesta.CreateSandboxSessionRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.CreateSandboxResponse>> {
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            this._options?.headers,
            mergeOnlyDefinedHeaders({ "x-api-secret": requestOptions?.apiSecret ?? this._options?.apiSecret }),
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MestaEnvironment.Production,
                "v1/sandbox/sessions",
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
            return { data: _response.body as Mesta.CreateSandboxResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Mesta.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 403:
                    throw new Mesta.ForbiddenError(_response.error.body as unknown, _response.rawResponse);
                case 409:
                    throw new Mesta.ConflictError(_response.error.body as unknown, _response.rawResponse);
                case 410:
                    throw new Mesta.GoneError(_response.error.body as Mesta.ErrorResponse, _response.rawResponse);
                case 422:
                    throw new Mesta.UnprocessableEntityError(_response.error.body as unknown, _response.rawResponse);
                case 429:
                    throw new Mesta.TooManyRequestsError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Mesta.ServiceUnavailableError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.MestaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v1/sandbox/sessions");
    }

    /**
     * The browser shape, posted by the sandbox portal's sign-up form with a Cloudflare Turnstile token; CORS admits that origin only, so scripts use POST /v1/sandbox/sessions. Creates the sandbox already claimed by the given email with status `claimed`, `emailVerified: false`, no claimUrl, a portal `session`, and 72 hours to enter the emailed code. One live sandbox per verified email address.
     *
     * @param {Mesta.SandboxSignupRequest} request
     * @param {SandboxClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.BadRequestError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.ConflictError}
     * @throws {@link Mesta.UnprocessableEntityError}
     * @throws {@link Mesta.TooManyRequestsError}
     * @throws {@link Mesta.ServiceUnavailableError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.sandbox.signUp({
     *         turnstileToken: "turnstileToken",
     *         email: "email",
     *         fullName: "Example Developer",
     *         password: "password",
     *         country: "US",
     *         acceptTerms: true
     *     })
     */
    public signUp(
        request: Mesta.SandboxSignupRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.SignUpSandboxResponse> {
        return core.HttpResponsePromise.fromPromise(this.__signUp(request, requestOptions));
    }

    private async __signUp(
        request: Mesta.SandboxSignupRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.SignUpSandboxResponse>> {
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            this._options?.headers,
            mergeOnlyDefinedHeaders({ "x-api-secret": requestOptions?.apiSecret ?? this._options?.apiSecret }),
            requestOptions?.headers,
        );
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MestaEnvironment.Production,
                "v1/sandbox/signups",
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
            return { data: _response.body as Mesta.SignUpSandboxResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Mesta.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 403:
                    throw new Mesta.ForbiddenError(_response.error.body as unknown, _response.rawResponse);
                case 409:
                    throw new Mesta.ConflictError(_response.error.body as unknown, _response.rawResponse);
                case 422:
                    throw new Mesta.UnprocessableEntityError(_response.error.body as unknown, _response.rawResponse);
                case 429:
                    throw new Mesta.TooManyRequestsError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Mesta.ServiceUnavailableError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.MestaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v1/sandbox/signups");
    }

    /**
     * The sandbox's status, deadline, `emailVerified`, `executionPaused`, `pauseMessage`, all seven `counts`, `wallets.senders` usage and per-sender states, the progress of the sample data (`seed.status`, `seed.step`, `seed.steps`, `seed.error`), the `fixtures` block once the sample data is complete, and its keys by id with `kind`, `expiresAt` and `lastUsedAt`; never an API key secret. The `fixtures` include the retrievable webhook signing key. Requires `merchant:sandbox:read` (included in the initial standard integration key; narrower keys must request it) or a session of the sandbox's merchant. Another sandbox's id is 404. A failed sandbox's keys can read this route for 24 hours and nothing else.
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
                    throw new Mesta.ServiceUnavailableError(_response.error.body as unknown, _response.rawResponse);
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
                    throw new Mesta.ServiceUnavailableError(_response.error.body as unknown, _response.rawResponse);
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
     * Enters the six-digit code emailed at sign-up or claim. Success clears `expiresAt` on the sandbox and only on keys flagged expires_with_sandbox (never a retiring predecessor): the sandbox now persists until deleted. Requires a portal session. 20 attempts per hour per network address; five wrong attempts void the code. Wrong attempts return 400 with attemptsRemaining down to zero; a further attempt returns 410 VERIFICATION_CODE_EXPIRED. Resend is an explicit owner action, never automatic.
     *
     * @param {Mesta.SandboxVerifyEmailRequest} request
     * @param {SandboxClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.BadRequestError}
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.ConflictError}
     * @throws {@link Mesta.GoneError}
     * @throws {@link Mesta.TooManyRequestsError}
     * @throws {@link Mesta.ServiceUnavailableError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.sandbox.verifyEmail({
     *         id: "id",
     *         code: "123456"
     *     })
     */
    public verifyEmail(
        request: Mesta.SandboxVerifyEmailRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.VerifyEmailSandboxResponse> {
        return core.HttpResponsePromise.fromPromise(this.__verifyEmail(request, requestOptions));
    }

    private async __verifyEmail(
        request: Mesta.SandboxVerifyEmailRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.VerifyEmailSandboxResponse>> {
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
                `v1/sandbox/sessions/${core.url.encodePathParam(id)}/verify-email`,
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
            return { data: _response.body as Mesta.VerifyEmailSandboxResponse, rawResponse: _response.rawResponse };
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
                case 410:
                    throw new Mesta.GoneError(_response.error.body as Mesta.ErrorResponse, _response.rawResponse);
                case 429:
                    throw new Mesta.TooManyRequestsError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Mesta.ServiceUnavailableError(_response.error.body as unknown, _response.rawResponse);
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
            "/v1/sandbox/sessions/{id}/verify-email",
        );
    }

    /**
     * Sends the replacement code, never the unexpired code again, no sooner than 60 seconds after the last mail; three codes per address per hour and ten per day. A resend never refreshes the attempt allowance of the old code: it voids that code and gives the replacement five fresh attempts. Requires a portal session.
     *
     * @param {Mesta.ResendCodeSandboxRequest} request
     * @param {SandboxClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link Mesta.ConflictError}
     * @throws {@link Mesta.GoneError}
     * @throws {@link Mesta.TooManyRequestsError}
     * @throws {@link Mesta.ServiceUnavailableError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.sandbox.resendCode({
     *         id: "id"
     *     })
     */
    public resendCode(
        request: Mesta.ResendCodeSandboxRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.ResendCodeSandboxResponse> {
        return core.HttpResponsePromise.fromPromise(this.__resendCode(request, requestOptions));
    }

    private async __resendCode(
        request: Mesta.ResendCodeSandboxRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.ResendCodeSandboxResponse>> {
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
                `v1/sandbox/sessions/${core.url.encodePathParam(id)}/resend-code`,
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
            return { data: _response.body as Mesta.ResendCodeSandboxResponse, rawResponse: _response.rawResponse };
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
                case 410:
                    throw new Mesta.GoneError(_response.error.body as Mesta.ErrorResponse, _response.rawResponse);
                case 429:
                    throw new Mesta.TooManyRequestsError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Mesta.ServiceUnavailableError(_response.error.body as unknown, _response.rawResponse);
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
            "/v1/sandbox/sessions/{id}/resend-code",
        );
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
                    throw new Mesta.ServiceUnavailableError(_response.error.body as unknown, _response.rawResponse);
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
     * Records the request on the sandbox after a successful mail and sends one message to Mesta's sales team with the sandbox id, merchant name and owner email. Once a day, from a verified owner's session. Production access requires KYB and Mesta's acceptance; the sandbox is not an approval. The sales mail is sent first; only success records requestedAt. A dispatch pause or dependency fault leaves the request repeatable, without consuming its daily allowance.
     *
     * @param {Mesta.RequestProductionSandboxRequest} request
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
     *     await client.sandbox.requestProduction({
     *         id: "id"
     *     })
     */
    public requestProduction(
        request: Mesta.RequestProductionSandboxRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.RequestProductionSandboxResponse> {
        return core.HttpResponsePromise.fromPromise(this.__requestProduction(request, requestOptions));
    }

    private async __requestProduction(
        request: Mesta.RequestProductionSandboxRequest,
        requestOptions?: SandboxClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.RequestProductionSandboxResponse>> {
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
                `v1/sandbox/sessions/${core.url.encodePathParam(id)}/request-production`,
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
                data: _response.body as Mesta.RequestProductionSandboxResponse,
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
                    throw new Mesta.ServiceUnavailableError(_response.error.body as unknown, _response.rawResponse);
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
            "/v1/sandbox/sessions/{id}/request-production",
        );
    }

    /**
     * Creates your merchant's wallet with four test-network addresses (Ethereum Sepolia and Polygon Amoy share one, Solana devnet, Tron Nile) when it was skipped while the sample data was added; the home page's wallets card shows "wallets pending" in that case. Attempted once; counted against the sandbox environment's daily wallet ceiling. Requires `merchant:sandbox:write`, key or session.
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
                    throw new Mesta.ServiceUnavailableError(_response.error.body as unknown, _response.rawResponse);
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
     * Creates the sender's wallet with four test-network addresses, once per sender; five senders per sandbox can hold wallets and the sixth answers 409 SANDBOX_CAP_EXCEEDED. The sender must be yours (404 otherwise). Requires `merchant:sender:write`, key or session. The portal's "Generate test wallets" makes this call.
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
                    throw new Mesta.ServiceUnavailableError(_response.error.body as unknown, _response.rawResponse);
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
