
import * as Mesta from "../../../src/api/index";
import { MestaClient } from "../../../src/Client";
import { mockServerPool } from "../../mock-server/MockServerPool";

describe("TermsOfServiceClient", () => {
    test("getStatus (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            data: {
                version: "2025-10-05",
                agreementId: "f0ae7d7c-2784-4385-8e24-2f61f5b53ef3",
                acceptedAt: "2025-10-13T10:57:24Z",
                isAccepted: true,
                isExpired: false,
                generatedAt: "2025-10-13T05:27:03Z",
                senderName: "John Doe",
                senderEmail: "john.doe@example.com",
                tosVersion: "2025-10-05",
                tosLink: "https://api.mesta.xyz/accept-terms/abc123xyz",
                token: "abc123xyz",
                expiresAt: "2025-11-12T10:57:03Z",
                status: "accepted",
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/senders/senderId/tos-status")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.termsOfService.getStatus({
            senderId: "senderId",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("getStatus (2)", async () => {
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
            .get("/v1/senders/senderId/tos-status")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.termsOfService.getStatus({
                senderId: "senderId",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("getStatus (3)", async () => {
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
            .get("/v1/senders/senderId/tos-status")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.termsOfService.getStatus({
                senderId: "senderId",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("getStatus (4)", async () => {
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
            .get("/v1/senders/senderId/tos-status")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.termsOfService.getStatus({
                senderId: "senderId",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("getStatus (5)", async () => {
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
            .get("/v1/senders/senderId/tos-status")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.termsOfService.getStatus({
                senderId: "senderId",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });

    test("getAcceptance (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            data: {
                senderName: "senderName",
                senderEmail: "senderEmail",
                merchantName: "merchantName",
                tosVersion: "tosVersion",
                isExpired: true,
                isAccepted: true,
                generatedAt: "2024-01-15T09:30:00Z",
                expiresAt: "2024-01-15T09:30:00Z",
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/senders/tos-acceptance/token")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.termsOfService.getAcceptance({
            token: "token",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("getAcceptance (2)", async () => {
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
            .get("/v1/senders/tos-acceptance/token")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.termsOfService.getAcceptance({
                token: "token",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("getAcceptance (3)", async () => {
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
            .get("/v1/senders/tos-acceptance/token")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.termsOfService.getAcceptance({
                token: "token",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("getAcceptance (4)", async () => {
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
            .get("/v1/senders/tos-acceptance/token")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.termsOfService.getAcceptance({
                token: "token",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
