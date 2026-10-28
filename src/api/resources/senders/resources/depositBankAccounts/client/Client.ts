
import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers.js";
import * as core from "../../../../../../core/index.js";
import { mergeAdditionalBodyParameters } from "../../../../../../core/requestBody.js";
import * as environments from "../../../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../../../errors/index.js";
import * as Mesta from "../../../../../index.js";

export declare namespace DepositBankAccountsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class DepositBankAccountsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<DepositBankAccountsClient.Options>;

    constructor(options: DepositBankAccountsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Initiates the creation of a deposit bank account for a sender on demand, in the requested currency.
     *
     * @param {Mesta.senders.GenerateOnDemandDepositBankAccountsRequest} request
     * @param {DepositBankAccountsClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.senders.depositBankAccounts.generateOnDemand({
     *         id: "id",
     *         currency: "EUR"
     *     })
     *
     * @example
     *     await client.senders.depositBankAccounts.generateOnDemand({
     *         id: "id",
     *         currency: "GBP"
     *     })
     *
     * @example
     *     await client.senders.depositBankAccounts.generateOnDemand({
     *         id: "id",
     *         currency: "MXN"
     *     })
     *
     * @example
     *     await client.senders.depositBankAccounts.generateOnDemand({
     *         id: "id",
     *         currency: "USD"
     *     })
     */
    public generateOnDemand(
        request: Mesta.senders.GenerateOnDemandDepositBankAccountsRequest,
        requestOptions?: DepositBankAccountsClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.senders.GenerateOnDemandDepositBankAccountsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__generateOnDemand(request, requestOptions));
    }

    private async __generateOnDemand(
        request: Mesta.senders.GenerateOnDemandDepositBankAccountsRequest,
        requestOptions?: DepositBankAccountsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.senders.GenerateOnDemandDepositBankAccountsResponse>> {
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
                `v1/senders/${core.url.encodePathParam(id)}/generate-ondemand-deposit-bank-accounts`,
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
                data: _response.body as Mesta.senders.GenerateOnDemandDepositBankAccountsResponse,
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
            "/v1/senders/{id}/generate-ondemand-deposit-bank-accounts",
        );
    }
}
