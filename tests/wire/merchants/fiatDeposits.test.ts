
import * as Mesta from "../../../src/api/index";
import { MestaClient } from "../../../src/Client";
import { mockServerPool } from "../../mock-server/MockServerPool";

describe("FiatDepositsClient", () => {
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
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    amount: "1000.00",
                    currency: "USD",
                    transactionId: "550e8400-e29b-41d4-a716-446655440001",
                    merchantId: "550e8400-e29b-41d4-a716-446655440003",
                    senderId: "550e8400-e29b-41d4-a716-446655440004",
                    depositBankAccountId: "550e8400-e29b-41d4-a716-446655440005",
                    createdAt: "2024-12-03T10:00:00Z",
                    updatedAt: "2024-12-03T10:00:00Z",
                    merchantName: "merchantName",
                    merchantEmail: "merchantEmail",
                    senderName: "senderName",
                    senderEmail: "senderEmail",
                },
            ],
            total: 1,
            hasNext: true,
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/merchant/fiat-deposits")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.merchants.fiatDeposits.list({
            search: "abc123",
            merchantId: "550e8400-e29b-41d4-a716-446655440000",
            senderId: "550e8400-e29b-41d4-a716-446655440001",
            depositBankAccountId: "550e8400-e29b-41d4-a716-446655440002",
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
            .get("/v1/merchant/fiat-deposits")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.fiatDeposits.list();
        }).rejects.toThrow(Mesta.BadRequestError);
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
            .get("/v1/merchant/fiat-deposits")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.fiatDeposits.list();
        }).rejects.toThrow(Mesta.UnauthorizedError);
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
            .get("/v1/merchant/fiat-deposits")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.fiatDeposits.list();
        }).rejects.toThrow(Mesta.ForbiddenError);
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
            .get("/v1/merchant/fiat-deposits")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.fiatDeposits.list();
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
                id: "550e8400-e29b-41d4-a716-446655440000",
                amount: "1000.00",
                currency: "USD",
                transactionId: "550e8400-e29b-41d4-a716-446655440001",
                merchantId: "550e8400-e29b-41d4-a716-446655440003",
                senderId: "550e8400-e29b-41d4-a716-446655440004",
                depositBankAccountId: "550e8400-e29b-41d4-a716-446655440005",
                createdAt: "2024-12-03T10:00:00Z",
                updatedAt: "2024-12-03T10:00:00Z",
                depositDetails: {
                    depositorName: "Acme Payments EU Ltd",
                    depositorAddress: "depositorAddress",
                    depositorBankAccountNumber: "GB29NWBK60161331926819",
                    depositorBankName: "Global Trust Bank",
                    depositorBankCountry: "depositorBankCountry",
                    routingCodes: [{ routingCodeKey: "SORT_CODE", routingCodeValue: "123456" }],
                    wireRoutingNumber: "wireRoutingNumber",
                    sortCode: "sortCode",
                    paymentType: "TRANSFER",
                    transactionDate: "2026-02-05T21:48:01.424",
                    transactionReference: "REF20260101ABC",
                },
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/merchant/fiat-deposits/550e8400-e29b-41d4-a716-446655440000")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.merchants.fiatDeposits.get({
            id: "550e8400-e29b-41d4-a716-446655440000",
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
            .get("/v1/merchant/fiat-deposits/id")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.fiatDeposits.get({
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

        server
            .mockEndpoint()
            .get("/v1/merchant/fiat-deposits/id")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.fiatDeposits.get({
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

        server
            .mockEndpoint()
            .get("/v1/merchant/fiat-deposits/id")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.fiatDeposits.get({
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

        server
            .mockEndpoint()
            .get("/v1/merchant/fiat-deposits/id")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.fiatDeposits.get({
                id: "id",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
