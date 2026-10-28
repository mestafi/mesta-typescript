
import * as Mesta from "../../../src/api/index";
import { MestaClient } from "../../../src/Client";
import { mockServerPool } from "../../mock-server/MockServerPool";

describe("SourceWalletAddressesClient", () => {
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
                    id: "id",
                    version: 1,
                    createdAt: "2024-01-15T09:30:00Z",
                    updatedAt: "2024-01-15T09:30:00Z",
                    address: "address",
                    chain: "ethereum",
                    ownerId: "ownerId",
                    ownerType: "merchant",
                    riskLevel: "low",
                    merchantId: "merchantId",
                },
            ],
            total: 1,
            hasNext: true,
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/senders/id/source-wallet-addresses")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.sourceWalletAddresses.list({
            id: "id",
        });
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

        server
            .mockEndpoint()
            .get("/v1/senders/id/source-wallet-addresses")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.sourceWalletAddresses.list({
                id: "id",
            });
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

        server
            .mockEndpoint()
            .get("/v1/senders/id/source-wallet-addresses")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.sourceWalletAddresses.list({
                id: "id",
            });
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

        server
            .mockEndpoint()
            .get("/v1/senders/id/source-wallet-addresses")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.sourceWalletAddresses.list({
                id: "id",
            });
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

        server
            .mockEndpoint()
            .get("/v1/senders/id/source-wallet-addresses")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.sourceWalletAddresses.list({
                id: "id",
            });
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
        const rawRequestBody = [{ address: "address", chain: "chain" }];
        const rawResponseBody = {
            data: [
                {
                    id: "a777f45d-327e-4530-98de-7f8c02c8b1e4",
                    version: 2,
                    createdAt: "2024-11-14T21:41:15Z",
                    updatedAt: "2024-11-17T00:15:25Z",
                    address: "0x1111222233334444555566667777888899990000",
                    chain: "ethereum",
                    ownerId: "30ec1460-3a30-4a42-b16e-9c1630b66b63",
                    ownerType: "merchant",
                    riskLevel: "low",
                    merchantId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                },
            ],
            requestId: 18342,
        };

        server
            .mockEndpoint()
            .post("/v1/senders/id/source-wallet-addresses")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.sourceWalletAddresses.create({
            id: "id",
            body: [
                {
                    address: "address",
                    chain: "chain",
                },
            ],
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
        const rawRequestBody = [
            { address: "address", chain: "chain" },
            { address: "address", chain: "chain" },
        ];
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/senders/id/source-wallet-addresses")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.sourceWalletAddresses.create({
                id: "id",
                body: [
                    {
                        address: "address",
                        chain: "chain",
                    },
                    {
                        address: "address",
                        chain: "chain",
                    },
                ],
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
        const rawRequestBody = [
            { address: "address", chain: "chain" },
            { address: "address", chain: "chain" },
        ];
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/senders/id/source-wallet-addresses")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.sourceWalletAddresses.create({
                id: "id",
                body: [
                    {
                        address: "address",
                        chain: "chain",
                    },
                    {
                        address: "address",
                        chain: "chain",
                    },
                ],
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
        const rawRequestBody = [
            { address: "address", chain: "chain" },
            { address: "address", chain: "chain" },
        ];
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/senders/id/source-wallet-addresses")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.sourceWalletAddresses.create({
                id: "id",
                body: [
                    {
                        address: "address",
                        chain: "chain",
                    },
                    {
                        address: "address",
                        chain: "chain",
                    },
                ],
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
        const rawRequestBody = [
            { address: "address", chain: "chain" },
            { address: "address", chain: "chain" },
        ];
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/senders/id/source-wallet-addresses")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.sourceWalletAddresses.create({
                id: "id",
                body: [
                    {
                        address: "address",
                        chain: "chain",
                    },
                    {
                        address: "address",
                        chain: "chain",
                    },
                ],
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
        const rawRequestBody = [
            { address: "address", chain: "chain" },
            { address: "address", chain: "chain" },
        ];
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/v1/senders/id/source-wallet-addresses")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.sourceWalletAddresses.create({
                id: "id",
                body: [
                    {
                        address: "address",
                        chain: "chain",
                    },
                    {
                        address: "address",
                        chain: "chain",
                    },
                ],
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

        server
            .mockEndpoint()
            .delete("/v1/senders/id/source-wallet-addresses/sourceWalletAddressId")
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.senders.sourceWalletAddresses.delete({
            id: "id",
            sourceWalletAddressId: "sourceWalletAddressId",
        });
        expect(response).toEqual(undefined);
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

        server
            .mockEndpoint()
            .delete("/v1/senders/id/source-wallet-addresses/sourceWalletAddressId")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.sourceWalletAddresses.delete({
                id: "id",
                sourceWalletAddressId: "sourceWalletAddressId",
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

        server
            .mockEndpoint()
            .delete("/v1/senders/id/source-wallet-addresses/sourceWalletAddressId")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.sourceWalletAddresses.delete({
                id: "id",
                sourceWalletAddressId: "sourceWalletAddressId",
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

        server
            .mockEndpoint()
            .delete("/v1/senders/id/source-wallet-addresses/sourceWalletAddressId")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.sourceWalletAddresses.delete({
                id: "id",
                sourceWalletAddressId: "sourceWalletAddressId",
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

        server
            .mockEndpoint()
            .delete("/v1/senders/id/source-wallet-addresses/sourceWalletAddressId")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.sourceWalletAddresses.delete({
                id: "id",
                sourceWalletAddressId: "sourceWalletAddressId",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
