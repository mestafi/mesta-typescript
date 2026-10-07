// client.sandbox.get on a complete sandbox as round 14 of the API sends it: fixtures.magicValues is a list of
// {key, value, appliesTo, outcome, description} (contract sandbox-api-responses.md). Synthetic values only.
import type * as Mesta from "../../src/api/index";
import { MestaClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("SandboxClient", () => {
    test("get parses fixtures.magicValues as a list", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        // Typed as the SDK's response, so the type check proves the SDK accepts the server's shape.
        const rawResponseBody: Mesta.GetSandboxResponse = {
            data: {
                sandboxId: "sbx_01EXAMPLE00000000000000000",
                merchantId: "00000000-0000-4000-8000-000000000001",
                status: "unclaimed",
                plane: "sandbox",
                apiBaseUrl: "https://api.sandbox.mesta.xyz",
                portalUrl: "https://ohana.sandbox.mesta.xyz",
                createdAt: "2026-10-07T14:14:16.999Z",
                expiresAt: "2026-10-14T14:14:16.999Z",
                emailVerified: false,
                executionPaused: false,
                pauseMessage: null,
                counts: {
                    accounts: 13,
                    senders: 4,
                    beneficiaries: 13,
                    orders: 17,
                    deposits: 11,
                    wallets: 0,
                    webhooks: 1,
                },
                keys: [
                    {
                        id: "00000000-0000-4000-8000-000000000002",
                        kind: "standard",
                        expiresAt: "2026-10-14T14:14:16.999Z",
                        lastUsedAt: "2026-10-07T14:14:17.477Z",
                    },
                ],
                seed: {
                    status: "complete",
                    step: null,
                    steps: [
                        {
                            name: "merchant",
                            status: "done",
                        },
                        {
                            name: "keys",
                            status: "done",
                        },
                        {
                            name: "terms",
                            status: "done",
                        },
                        {
                            name: "merchant_setup",
                            status: "done",
                        },
                        {
                            name: "webhook",
                            status: "done",
                        },
                        {
                            name: "wallets",
                            status: "skipped",
                        },
                        {
                            name: "senders",
                            status: "done",
                        },
                        {
                            name: "deposits",
                            status: "done",
                        },
                        {
                            name: "beneficiaries",
                            status: "done",
                        },
                        {
                            name: "orders",
                            status: "done",
                        },
                        {
                            name: "fixtures",
                            status: "done",
                        },
                    ],
                    completedAt: "2026-10-07T14:14:38.463Z",
                    error: null,
                },
                wallets: {
                    senders: {
                        used: 0,
                        cap: 5,
                        items: [],
                    },
                    status: "unavailable",
                    reason: "not_offered_on_plane",
                },
                productionRequest: null,
                fixtures: {
                    orders: [
                        {
                            id: "00000000-0000-4000-8000-000000000010",
                            status: "created",
                        },
                        {
                            id: "00000000-0000-4000-8000-000000000011",
                            status: "success",
                        },
                    ],
                    senders: [
                        {
                            id: "00000000-0000-4000-8000-000000000020",
                            label: "Example Sender",
                        },
                    ],
                    version: "2026.10.1",
                    wallets: [],
                    webhook: {
                        id: "00000000-0000-4000-8000-000000000030",
                        url: "https://api.sandbox.mesta.xyz/v1/sandbox/sink/sbx_01EXAMPLE00000000000000000",
                        signingKey: "example-signing-key",
                    },
                    balances: [
                        {
                            owner: "00000000-0000-4000-8000-000000000020",
                            amount: "100000.00",
                            currency: "USD",
                        },
                    ],
                    magicValues: [
                        {
                            key: "quote_source_amount_cents_99",
                            value: ".99",
                            outcome: ["order:failed"],
                            appliesTo: "the cents of sourceAmount in POST /v1/quotes",
                            description: "An order placed on a quote whose sourceAmount ends in .99 fails its payout.",
                        },
                        {
                            key: "quote_source_amount_cents_77",
                            value: ".77",
                            outcome: ["order:success", "order:returned"],
                            appliesTo: "the cents of sourceAmount in POST /v1/quotes",
                            description:
                                "An order placed on a quote whose sourceAmount ends in .77 is paid and then returned.",
                        },
                    ],
                    beneficiaries: [
                        {
                            id: "00000000-0000-4000-8000-000000000040",
                            label: "Example Beneficiary",
                            paymentMethodId: "00000000-0000-4000-8000-000000000041",
                        },
                    ],
                    depositSource: "sender",
                },
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/sandbox/sessions/sbx_01EXAMPLE00000000000000000")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.sandbox.get({ id: "sbx_01EXAMPLE00000000000000000" });
        expect(response).toEqual(rawResponseBody);

        const magicValues: Mesta.SandboxFixtures.MagicValues.Item[] = response.data.fixtures?.magicValues ?? [];
        expect(Array.isArray(magicValues)).toBe(true);
        expect(magicValues.map((item) => item.key)).toEqual([
            "quote_source_amount_cents_99",
            "quote_source_amount_cents_77",
        ]);
        expect(magicValues[0]?.appliesTo).toBe("the cents of sourceAmount in POST /v1/quotes");
        expect(magicValues[1]?.outcome).toEqual(["order:success", "order:returned"]);
    });
});
