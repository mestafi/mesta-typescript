
import * as Mesta from "../../src/api/index";
import { MestaClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("WebhooksClient", () => {
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
                    id: "8a85bb8a-3c4d-43b9-b57e-132dfc224e54",
                    version: 1,
                    createdAt: "2024-08-01T16:10:15Z",
                    updatedAt: "2024-08-01T16:10:15Z",
                    merchantId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                    url: "https://www.example.com/webhook",
                    events: ["order:*"],
                },
            ],
            total: 3,
            hasNext: false,
            requestId: 20536,
        };

        server.mockEndpoint().get("/v1/webhooks").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.webhooks.list();
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

        server.mockEndpoint().get("/v1/webhooks").respondWith().statusCode(401).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.webhooks.list();
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

        server.mockEndpoint().get("/v1/webhooks").respondWith().statusCode(403).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.webhooks.list();
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

        server.mockEndpoint().get("/v1/webhooks").respondWith().statusCode(404).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.webhooks.list();
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

        server.mockEndpoint().get("/v1/webhooks").respondWith().statusCode(500).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.webhooks.list();
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
        const rawRequestBody = {
            events: ["order:*", "sender:kyb_approved", "fiat_deposit:settled"],
            url: "https://example.com/webhooks/mesta",
        };
        const rawResponseBody = {
            data: {
                id: "828b3ff4-5ced-47ca-bc9f-ee17166c1933",
                version: 1,
                createdAt: "2024-11-17T06:13:41Z",
                updatedAt: "2024-11-17T06:13:41Z",
                merchantId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                url: "https://example.com/webhook",
                events: ["order:*"],
            },
            requestId: 20580,
        };

        server
            .mockEndpoint()
            .post("/v1/webhooks")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.webhooks.create({
            events: ["order:*", "sender:kyb_approved", "fiat_deposit:settled"],
            url: "https://example.com/webhooks/mesta",
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
        const rawRequestBody = { events: ["order:*", "order:*"], url: "url" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/webhooks")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.webhooks.create({
                events: ["order:*", "order:*"],
                url: "url",
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
        const rawRequestBody = { events: ["order:*", "order:*"], url: "url" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/webhooks")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.webhooks.create({
                events: ["order:*", "order:*"],
                url: "url",
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
        const rawRequestBody = { events: ["order:*", "order:*"], url: "url" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/webhooks")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.webhooks.create({
                events: ["order:*", "order:*"],
                url: "url",
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
        const rawRequestBody = { events: ["order:*", "order:*"], url: "url" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/webhooks")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.webhooks.create({
                events: ["order:*", "order:*"],
                url: "url",
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
        const rawRequestBody = { events: ["order:*", "order:*"], url: "url" };
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/v1/webhooks")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.webhooks.create({
                events: ["order:*", "order:*"],
                url: "url",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });

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
                id: "8a85bb8a-3c4d-43b9-b57e-132dfc224e54",
                version: 1,
                createdAt: "2024-08-01T16:10:15Z",
                updatedAt: "2024-08-01T16:10:15Z",
                merchantId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                url: "https://www.example.com/webhook",
                events: ["order:*"],
            },
            requestId: 20536,
        };

        server.mockEndpoint().get("/v1/webhooks/id").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.webhooks.get({
            id: "id",
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

        server.mockEndpoint().get("/v1/webhooks/id").respondWith().statusCode(401).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.webhooks.get({
                id: "id",
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

        server.mockEndpoint().get("/v1/webhooks/id").respondWith().statusCode(403).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.webhooks.get({
                id: "id",
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

        server.mockEndpoint().get("/v1/webhooks/id").respondWith().statusCode(404).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.webhooks.get({
                id: "id",
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

        server.mockEndpoint().get("/v1/webhooks/id").respondWith().statusCode(500).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.webhooks.get({
                id: "id",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });

    test("delete (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { requestId: 21144 };

        server.mockEndpoint().delete("/v1/webhooks/id").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.webhooks.delete({
            id: "id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("delete (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server.mockEndpoint().delete("/v1/webhooks/id").respondWith().statusCode(401).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.webhooks.delete({
                id: "id",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("delete (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server.mockEndpoint().delete("/v1/webhooks/id").respondWith().statusCode(403).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.webhooks.delete({
                id: "id",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("delete (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { key: "value" };

        server.mockEndpoint().delete("/v1/webhooks/id").respondWith().statusCode(404).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.webhooks.delete({
                id: "id",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("delete (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {};

        server.mockEndpoint().delete("/v1/webhooks/id").respondWith().statusCode(500).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.webhooks.delete({
                id: "id",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });

    test("update (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { events: ["order:*"], url: "url" };
        const rawResponseBody = {
            data: {
                id: "828b3ff4-5ced-47ca-bc9f-ee17166c1933",
                version: 1,
                createdAt: "2024-11-17T06:13:41Z",
                updatedAt: "2024-11-17T06:13:41Z",
                merchantId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                url: "https://example.com/webhook",
                events: ["order:*"],
            },
            requestId: 20580,
        };

        server
            .mockEndpoint()
            .patch("/v1/webhooks/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.webhooks.update({
            id: "id",
            events: ["order:*"],
            url: "url",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("update (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { events: ["order:*", "order:*"], url: "url" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .patch("/v1/webhooks/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.webhooks.update({
                id: "id",
                events: ["order:*", "order:*"],
                url: "url",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("update (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { events: ["order:*", "order:*"], url: "url" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .patch("/v1/webhooks/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.webhooks.update({
                id: "id",
                events: ["order:*", "order:*"],
                url: "url",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("update (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { events: ["order:*", "order:*"], url: "url" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .patch("/v1/webhooks/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.webhooks.update({
                id: "id",
                events: ["order:*", "order:*"],
                url: "url",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("update (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { events: ["order:*", "order:*"], url: "url" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .patch("/v1/webhooks/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.webhooks.update({
                id: "id",
                events: ["order:*", "order:*"],
                url: "url",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("update (6)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { events: ["order:*", "order:*"], url: "url" };
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .patch("/v1/webhooks/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.webhooks.update({
                id: "id",
                events: ["order:*", "order:*"],
                url: "url",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
