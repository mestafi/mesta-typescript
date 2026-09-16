
import * as Mesta from "../../src/api/index";
import { MestaClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("QuotesClient", () => {
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
                id: "968d017d-bcc2-42d8-85a9-a4ea752429bd",
                version: 1,
                createdAt: "2024-11-14T21:50:46Z",
                updatedAt: "2024-11-14T21:50:46Z",
                merchantId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                sourceCurrency: "USDC",
                targetCurrency: "INR",
                grossSourceAmount: "100",
                developerFee: "1.50",
                targetAmount: "100",
                transferType: "ach",
                expiresAt: "2024-11-14T21:55:46Z",
                status: "created",
                notes: "notes",
                failureReason: "failureReason",
                fircRequired: false,
            },
            requestId: 43565,
        };

        server.mockEndpoint().get("/v1/quotes/quoteId").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.quotes.get({
            quoteId: "quoteId",
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

        server.mockEndpoint().get("/v1/quotes/quoteId").respondWith().statusCode(401).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.quotes.get({
                quoteId: "quoteId",
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

        server.mockEndpoint().get("/v1/quotes/quoteId").respondWith().statusCode(403).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.quotes.get({
                quoteId: "quoteId",
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

        server.mockEndpoint().get("/v1/quotes/quoteId").respondWith().statusCode(404).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.quotes.get({
                quoteId: "quoteId",
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

        server.mockEndpoint().get("/v1/quotes/quoteId").respondWith().statusCode(500).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.quotes.get({
                quoteId: "quoteId",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });

    test("list (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            data: [
                {
                    id: "968d017d-bcc2-42d8-85a9-a4ea752429bd",
                    version: 1,
                    createdAt: "2024-11-14T21:50:46Z",
                    updatedAt: "2024-11-14T21:50:46Z",
                    merchantId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                    sourceCurrency: "USDC",
                    targetCurrency: "INR",
                    grossSourceAmount: "100",
                    developerFee: "1.50",
                    targetAmount: "200",
                    transferType: "ach",
                    expiresAt: "2024-11-14T21:55:46Z",
                    status: "created",
                    notes: "notes",
                    failureReason: "failureReason",
                    fircRequired: false,
                },
            ],
            total: 19,
            hasNext: true,
            requestId: 43670,
        };

        server.mockEndpoint().get("/v1/quotes").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.quotes.list();
        expect(response).toEqual(rawResponseBody);
    });

    test("list (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server.mockEndpoint().get("/v1/quotes").respondWith().statusCode(401).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.quotes.list();
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("list (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server.mockEndpoint().get("/v1/quotes").respondWith().statusCode(403).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.quotes.list();
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("list (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server.mockEndpoint().get("/v1/quotes").respondWith().statusCode(404).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.quotes.list();
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("list (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server.mockEndpoint().get("/v1/quotes").respondWith().statusCode(500).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.quotes.list();
        }).rejects.toThrow(Mesta.InternalServerError);
    });

    test("create (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { key: "value" };
        const rawResponseBody = {
            data: {
                id: "id",
                version: 1,
                createdAt: "2024-01-15T09:30:00Z",
                updatedAt: "2024-01-15T09:30:00Z",
                merchantId: "merchantId",
                sourceCurrency: "sourceCurrency",
                targetCurrency: "targetCurrency",
                grossSourceAmount: "grossSourceAmount",
                developerFee: "developerFee",
                targetAmount: "targetAmount",
                transferType: "ach",
                expiresAt: "2024-01-15T09:30:00Z",
                status: "created",
                notes: "notes",
                failureReason: "failureReason",
                fircRequired: true,
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .post("/v1/quotes")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.quotes.create({
            key: "value",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("create (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { key: "value" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/quotes")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.quotes.create({
                key: "value",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("create (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { key: "value" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/quotes")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.quotes.create({
                key: "value",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("create (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { key: "value" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/quotes")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.quotes.create({
                key: "value",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("create (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { key: "value" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/quotes")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.quotes.create({
                key: "value",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("create (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { key: "value" };
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/v1/quotes")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.quotes.create({
                key: "value",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
