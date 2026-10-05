
import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptions, normalizeClientOptions } from "../../../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers.js";
import * as core from "../../../../../../core/index.js";
import { mergeAdditionalBodyParameters } from "../../../../../../core/requestBody.js";
import * as environments from "../../../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../../../errors/index.js";
import * as Mesta from "../../../../../index.js";

export declare namespace ClaimsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class ClaimsClient {
    protected readonly _options: NormalizedClientOptions<ClaimsClient.Options>;

    constructor(options: ClaimsClient.Options) {
        this._options = normalizeClientOptions(options);
    }

    /**
     * A non-consuming read of a claim token: `fresh`, `seeding` (with the current `seed.step`), `expired`, `used` or `killed`, with the counts of the sample data and, for `fresh`, the keys created before the claim and the endpoint hosts. The token travels in the body because request paths are logged. No authentication; 20 per hour per network address, a `seeding` answer uncounted. A fresh answer is also uncounted. Expired, unknown and malformed tokens return data containing only status: expired, with no sandbox metadata.
     *
     * @param {Mesta.sandbox.SandboxClaimStatusRequest} request
     * @param {ClaimsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.TooManyRequestsError}
     * @throws {@link Mesta.ServiceUnavailableError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.sandbox.claims.getStatus({
     *         token: "token"
     *     })
     */
    public getStatus(
        request: Mesta.sandbox.SandboxClaimStatusRequest,
        requestOptions?: ClaimsClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.sandbox.GetStatusClaimsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getStatus(request, requestOptions));
    }

    private async __getStatus(
        request: Mesta.sandbox.SandboxClaimStatusRequest,
        requestOptions?: ClaimsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.sandbox.GetStatusClaimsResponse>> {
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
                "v1/sandbox/claims/status",
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
            return {
                data: _response.body as Mesta.sandbox.GetStatusClaimsResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v1/sandbox/claims/status");
    }

    /**
     * Makes the caller the owner of an unclaimed sandbox: writes the email, name and password onto the sandbox's user, re-stamps the terms acceptance, revokes the keys created before the claim and the webhook endpoints created before it, rotates the webhook signing key and recreates the Mesta test endpoint, and mints one fresh standard pair returned once, unless `keepPreClaimKeys` is true. Returns the sandbox and a portal session. The sandbox then has 72 hours to verify the email. Single use, atomic on the token and the email. No authentication; 20 per hour per network address; a 409 SANDBOX_SEEDING answer is uncounted and leaves the token valid. keepPreClaimKeys keeps the keys, endpoints and signing key together; keys in the success body is then an empty array. The 20-per-rolling-hour claim counter counts token-check refusals only; probes answering `seeding` and claims answering SANDBOX_SEEDING are uncounted.
     *
     * @param {Mesta.sandbox.SandboxClaimRequest} request
     * @param {ClaimsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.BadRequestError}
     * @throws {@link Mesta.ConflictError}
     * @throws {@link Mesta.GoneError}
     * @throws {@link Mesta.UnprocessableEntityError}
     * @throws {@link Mesta.TooManyRequestsError}
     * @throws {@link Mesta.ServiceUnavailableError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.sandbox.claims.create({
     *         token: "token",
     *         email: "email",
     *         fullName: "Example Developer",
     *         password: "password",
     *         acceptTerms: true
     *     })
     */
    public create(
        request: Mesta.sandbox.SandboxClaimRequest,
        requestOptions?: ClaimsClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.sandbox.CreateClaimsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Mesta.sandbox.SandboxClaimRequest,
        requestOptions?: ClaimsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.sandbox.CreateClaimsResponse>> {
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
                "v1/sandbox/claims",
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
            return { data: _response.body as Mesta.sandbox.CreateClaimsResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Mesta.BadRequestError(_response.error.body as unknown, _response.rawResponse);
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

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/v1/sandbox/claims");
    }
}
