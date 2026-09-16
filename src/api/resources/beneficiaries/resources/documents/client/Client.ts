
import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers.js";
import * as core from "../../../../../../core/index.js";
import * as environments from "../../../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../../../errors/index.js";
import * as Mesta from "../../../../../index.js";

export declare namespace DocumentsClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class DocumentsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<DocumentsClient.Options>;

    constructor(options: DocumentsClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Generates a pre-signed URL to download a beneficiary's uploaded document. The URL expires after 300 seconds.
     *
     * @param {Mesta.beneficiaries.GetPresignedUrlDocumentsRequest} request
     * @param {DocumentsClient.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.beneficiaries.documents.getPresignedUrl({
     *         beneficiaryId: "beneficiaryId",
     *         documentId: "documentId"
     *     })
     */
    public getPresignedUrl(
        request: Mesta.beneficiaries.GetPresignedUrlDocumentsRequest,
        requestOptions?: DocumentsClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.beneficiaries.GetPresignedUrlDocumentsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getPresignedUrl(request, requestOptions));
    }

    private async __getPresignedUrl(
        request: Mesta.beneficiaries.GetPresignedUrlDocumentsRequest,
        requestOptions?: DocumentsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.beneficiaries.GetPresignedUrlDocumentsResponse>> {
        const { beneficiaryId, documentId, type: type_ } = request;
        const _queryParams: Record<string, unknown> = {
            type: type_ != null ? type_ : undefined,
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
                `v1/beneficiaries/${core.url.encodePathParam(beneficiaryId)}/documents/${core.url.encodePathParam(documentId)}/presigned-url`,
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
                data: _response.body as Mesta.beneficiaries.GetPresignedUrlDocumentsResponse,
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
            "GET",
            "/v1/beneficiaries/{beneficiaryId}/documents/{documentId}/presigned-url",
        );
    }

    /**
     * Generate a pre-signed URL for downloading the purpose of payment document attached to a beneficiary. The URL expires in 300 seconds.
     *
     * @param {Mesta.beneficiaries.GetPurposeOfPaymentPresignedUrlDocumentsRequest} request
     * @param {DocumentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mesta.UnauthorizedError}
     * @throws {@link Mesta.ForbiddenError}
     * @throws {@link Mesta.NotFoundError}
     * @throws {@link errors.MestaError}
     * @throws {@link errors.MestaTimeoutError}
     *
     * @example
     *     await client.beneficiaries.documents.getPurposeOfPaymentPresignedUrl({
     *         id: "id"
     *     })
     */
    public getPurposeOfPaymentPresignedUrl(
        request: Mesta.beneficiaries.GetPurposeOfPaymentPresignedUrlDocumentsRequest,
        requestOptions?: DocumentsClient.RequestOptions,
    ): core.HttpResponsePromise<Mesta.beneficiaries.GetPurposeOfPaymentPresignedUrlDocumentsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getPurposeOfPaymentPresignedUrl(request, requestOptions));
    }

    private async __getPurposeOfPaymentPresignedUrl(
        request: Mesta.beneficiaries.GetPurposeOfPaymentPresignedUrlDocumentsRequest,
        requestOptions?: DocumentsClient.RequestOptions,
    ): Promise<core.WithRawResponse<Mesta.beneficiaries.GetPurposeOfPaymentPresignedUrlDocumentsResponse>> {
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
                `v2/beneficiaries/${core.url.encodePathParam(id)}/purpose-of-payment-document/presigned-url`,
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
                data: _response.body as Mesta.beneficiaries.GetPurposeOfPaymentPresignedUrlDocumentsResponse,
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
            "/v2/beneficiaries/{id}/purpose-of-payment-document/presigned-url",
        );
    }
}
