
import * as Mesta from "../../src/api/index";
import { MestaClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("TransfersClient", () => {
    test("create (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = {
            senderId: "877157e3-5433-4a17-b89e-92bb2709fc44",
            beneficiarySenderId: "3f1f8dcb-42a5-4c46-a41b-2f7f2f6a9f10",
            acceptedQuoteId: "ad0d23ef-8482-47a1-bb08-d2556f4347e5",
        };
        const rawResponseBody = {
            data: {
                id: "258abf6a-5aee-4fb3-92ac-b93ca5a03c64",
                senderId: "877157e3-5433-4a17-b89e-92bb2709fc44",
                beneficiarySenderId: "3f1f8dcb-42a5-4c46-a41b-2f7f2f6a9f10",
                merchantId: "ccfbddf1-009d-4b1c-aaa7-1f5eecc4398a",
                transferType: "internal",
                sourceCurrency: "USD",
                targetCurrency: "USD",
                acceptedGrossSourceAmount: "100.00",
                targetAmount: "99.50",
                acceptedQuoteId: "ad0d23ef-8482-47a1-bb08-d2556f4347e5",
                status: "created",
                createdAt: "2026-08-04T05:06:17Z",
                updatedAt: "2026-08-04T05:06:17Z",
            },
            requestId: 106597,
        };

        server
            .mockEndpoint()
            .post("/v1/transfers")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.transfers.create({
            senderId: "877157e3-5433-4a17-b89e-92bb2709fc44",
            beneficiarySenderId: "3f1f8dcb-42a5-4c46-a41b-2f7f2f6a9f10",
            acceptedQuoteId: "ad0d23ef-8482-47a1-bb08-d2556f4347e5",
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
        const rawRequestBody = {
            senderId: "senderId",
            beneficiarySenderId: "beneficiarySenderId",
            acceptedQuoteId: "acceptedQuoteId",
        };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/transfers")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.transfers.create({
                senderId: "senderId",
                beneficiarySenderId: "beneficiarySenderId",
                acceptedQuoteId: "acceptedQuoteId",
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
        const rawRequestBody = {
            senderId: "senderId",
            beneficiarySenderId: "beneficiarySenderId",
            acceptedQuoteId: "acceptedQuoteId",
        };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/transfers")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.transfers.create({
                senderId: "senderId",
                beneficiarySenderId: "beneficiarySenderId",
                acceptedQuoteId: "acceptedQuoteId",
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
        const rawRequestBody = {
            senderId: "senderId",
            beneficiarySenderId: "beneficiarySenderId",
            acceptedQuoteId: "acceptedQuoteId",
        };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/transfers")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.transfers.create({
                senderId: "senderId",
                beneficiarySenderId: "beneficiarySenderId",
                acceptedQuoteId: "acceptedQuoteId",
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
        const rawRequestBody = {
            senderId: "senderId",
            beneficiarySenderId: "beneficiarySenderId",
            acceptedQuoteId: "acceptedQuoteId",
        };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/transfers")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.transfers.create({
                senderId: "senderId",
                beneficiarySenderId: "beneficiarySenderId",
                acceptedQuoteId: "acceptedQuoteId",
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
        const rawRequestBody = {
            senderId: "senderId",
            beneficiarySenderId: "beneficiarySenderId",
            acceptedQuoteId: "acceptedQuoteId",
        };
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/v1/transfers")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.transfers.create({
                senderId: "senderId",
                beneficiarySenderId: "beneficiarySenderId",
                acceptedQuoteId: "acceptedQuoteId",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
