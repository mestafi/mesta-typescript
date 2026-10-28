
import * as Mesta from "../../../src/api/index";
import { MestaClient } from "../../../src/Client";
import { mockServerPool } from "../../mock-server/MockServerPool";

describe("TransactionsClient", () => {
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
                    id: "f6adcc1d-6263-43d9-966f-e7ebc9eb1063",
                    merchantId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
                    amount: "100.50",
                    currency: "USD",
                    type: "credit",
                    senderId: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
                    transactionId: "c3d4e5f6-a7b8-9012-cdef-123456789012",
                    virtualTransactionId: "d4e5f6a7-b8c9-0123-def1-234567890123",
                    orderId: "b2c3d4e5-f6a7-8901-bcde-f12345678909",
                    createdAt: "2025-12-01T10:30:00Z",
                    updatedAt: "2025-12-01T10:30:00Z",
                },
            ],
            total: 1000,
            hasNext: true,
            requestId: 86344,
        };

        server
            .mockEndpoint()
            .get("/v1/merchant-transactions")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.merchants.transactions.list({
            sortBy: "createdAt",
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
            .get("/v1/merchant-transactions")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.transactions.list();
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
            .get("/v1/merchant-transactions")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.transactions.list();
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

        const rawResponseBody = {};

        server
            .mockEndpoint()
            .get("/v1/merchant-transactions")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.transactions.list();
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
