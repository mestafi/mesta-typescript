
import * as Mesta from "../../src/api/index";
import { MestaClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("MerchantsClient", () => {
    test("get (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            data: {
                id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                version: 5,
                createdAt: "2024-07-23T14:18:46Z",
                updatedAt: "2024-11-14T21:37:31Z",
                name: "Sample Merchant",
                email: "email",
                phone: "+11234567890",
                taxId: "123456",
                website: "https://www.example.com/",
                status: "active",
                kyb: { status: "unverified", statusUpdatedAt: "2024-07-23T14:18:56Z" },
                address: {
                    id: "d44ed48d-e5f2-441b-b1c0-a19c4b7e85e4",
                    version: 3,
                    createdAt: "2024-07-23T14:18:46Z",
                    updatedAt: "2024-11-14T21:37:31Z",
                    street: "123 ABC Dr",
                    street2: "",
                    city: "San Francisco",
                    state: "CA",
                    postalCode: "94105",
                    country: "US",
                    merchantId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                },
                ubo: {
                    id: "c3860cb0-8ca2-4f02-aa8f-3b80ba3165d1",
                    version: 3,
                    createdAt: "2024-07-23T14:18:46Z",
                    updatedAt: "2024-11-14T21:37:31Z",
                    firstName: "firstName",
                    lastName: "lastName",
                    email: "email",
                    merchantId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                    ownershipPercent: 88,
                    identificationNumber: "identificationNumber",
                    birthDate: "birthDate",
                },
                depositWalletAddresses: ["depositWalletAddresses"],
                webhookSignatureKey: "webhookSignatureKey",
                termsAcceptedAt: "2024-01-15T09:30:00Z",
                termsAcceptedBy: "termsAcceptedBy",
                termsAcceptedIp: "termsAcceptedIp",
                depositSource: "depositSource",
                depositBankAccounts: [{ key: "value" }],
            },
            requestId: 9004,
        };

        server
            .mockEndpoint()
            .get("/v1/merchants/merchantId")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.merchants.get({
            merchantId: "merchantId",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("get (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .get("/v1/merchants/merchantId")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.get({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("get (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .get("/v1/merchants/merchantId")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.get({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("get (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .get("/v1/merchants/merchantId")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.get({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("get (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/v1/merchants/merchantId")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.get({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });

    test("acceptTerms (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { data: { success: true }, requestId: 1 };

        server
            .mockEndpoint()
            .post("/v1/merchants/merchantId/accept-terms")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.merchants.acceptTerms({
            merchantId: "merchantId",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("acceptTerms (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/merchants/merchantId/accept-terms")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.acceptTerms({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("acceptTerms (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/merchants/merchantId/accept-terms")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.acceptTerms({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("acceptTerms (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/merchants/merchantId/accept-terms")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.acceptTerms({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("acceptTerms (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/merchants/merchantId/accept-terms")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.acceptTerms({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("acceptTerms (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/v1/merchants/merchantId/accept-terms")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.acceptTerms({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });

    test("getBalances (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { data: [{ currency: "currency", balance: 1.1 }], requestId: 1 };

        server
            .mockEndpoint()
            .get("/v1/merchants/merchantId/balances")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.merchants.getBalances({
            merchantId: "merchantId",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("getBalances (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .get("/v1/merchants/merchantId/balances")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.getBalances({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("getBalances (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .get("/v1/merchants/merchantId/balances")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.getBalances({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("getBalances (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .get("/v1/merchants/merchantId/balances")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.getBalances({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("getBalances (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .get("/v1/merchants/merchantId/balances")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.getBalances({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("getBalances (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/v1/merchants/merchantId/balances")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.getBalances({
                merchantId: "merchantId",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
