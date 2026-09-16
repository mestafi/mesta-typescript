
import { ApiKeysClient } from "./api/resources/apiKeys/client/Client.js";
import { AuthClient } from "./api/resources/auth/client/Client.js";
import { BeneficiariesClient } from "./api/resources/beneficiaries/client/Client.js";
import { EventsClient } from "./api/resources/events/client/Client.js";
import { MerchantsClient } from "./api/resources/merchants/client/Client.js";
import { OrdersClient } from "./api/resources/orders/client/Client.js";
import { PaymentMethodsClient } from "./api/resources/paymentMethods/client/Client.js";
import { QuotesClient } from "./api/resources/quotes/client/Client.js";
import { SendersClient } from "./api/resources/senders/client/Client.js";
import { TransfersClient } from "./api/resources/transfers/client/Client.js";
import { ValidationRulesClient } from "./api/resources/validationRules/client/Client.js";
import { WalletAddressesClient } from "./api/resources/walletAddresses/client/Client.js";
import { WebhooksClient } from "./api/resources/webhooks/client/Client.js";
import type { BaseClientOptions, BaseRequestOptions } from "./BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "./BaseClient.js";
import * as core from "./core/index.js";

export declare namespace MestaClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class MestaClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<MestaClient.Options>;
    protected _merchants: MerchantsClient | undefined;
    protected _walletAddresses: WalletAddressesClient | undefined;
    protected _senders: SendersClient | undefined;
    protected _beneficiaries: BeneficiariesClient | undefined;
    protected _quotes: QuotesClient | undefined;
    protected _orders: OrdersClient | undefined;
    protected _webhooks: WebhooksClient | undefined;
    protected _paymentMethods: PaymentMethodsClient | undefined;
    protected _validationRules: ValidationRulesClient | undefined;
    protected _events: EventsClient | undefined;
    protected _auth: AuthClient | undefined;
    protected _apiKeys: ApiKeysClient | undefined;
    protected _transfers: TransfersClient | undefined;

    constructor(options: MestaClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    public get merchants(): MerchantsClient {
        return (this._merchants ??= new MerchantsClient(this._options));
    }

    public get walletAddresses(): WalletAddressesClient {
        return (this._walletAddresses ??= new WalletAddressesClient(this._options));
    }

    public get senders(): SendersClient {
        return (this._senders ??= new SendersClient(this._options));
    }

    public get beneficiaries(): BeneficiariesClient {
        return (this._beneficiaries ??= new BeneficiariesClient(this._options));
    }

    public get quotes(): QuotesClient {
        return (this._quotes ??= new QuotesClient(this._options));
    }

    public get orders(): OrdersClient {
        return (this._orders ??= new OrdersClient(this._options));
    }

    public get webhooks(): WebhooksClient {
        return (this._webhooks ??= new WebhooksClient(this._options));
    }

    public get paymentMethods(): PaymentMethodsClient {
        return (this._paymentMethods ??= new PaymentMethodsClient(this._options));
    }

    public get validationRules(): ValidationRulesClient {
        return (this._validationRules ??= new ValidationRulesClient(this._options));
    }

    public get events(): EventsClient {
        return (this._events ??= new EventsClient(this._options));
    }

    public get auth(): AuthClient {
        return (this._auth ??= new AuthClient(this._options));
    }

    public get apiKeys(): ApiKeysClient {
        return (this._apiKeys ??= new ApiKeysClient(this._options));
    }

    public get transfers(): TransfersClient {
        return (this._transfers ??= new TransfersClient(this._options));
    }

    /**
     * Make a passthrough request using the SDK's configured auth, retry, logging, etc.
     * This is useful for making requests to endpoints not yet supported in the SDK.
     * The input can be a URL string, URL object, or Request object. Relative paths are resolved against the configured base URL.
     *
     * @param {Request | string | URL} input - The URL, path, or Request object.
     * @param {RequestInit} init - Standard fetch RequestInit options.
     * @param {core.PassthroughRequest.RequestOptions} requestOptions - Per-request overrides (timeout, retries, headers, abort signal).
     * @returns {Promise<Response>} A standard Response object.
     */
    public async fetch(
        input: Request | string | URL,
        init?: RequestInit,
        requestOptions?: core.PassthroughRequest.RequestOptions,
    ): Promise<Response> {
        return core.makePassthroughRequest(
            input,
            init,
            {
                baseUrl: this._options.baseUrl ?? this._options.environment,
                headers: this._options.headers,
                timeoutInSeconds: this._options.timeoutInSeconds,
                maxRetries: this._options.maxRetries,
                fetch: this._options.fetch,
                logging: this._options.logging,
                getAuthHeaders: async () => (await this._options.authProvider.getAuthRequest()).headers,
            },
            requestOptions,
        );
    }
}
