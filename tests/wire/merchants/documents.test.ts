
import * as Mesta from "../../../src/api/index";
import { MestaClient } from "../../../src/Client";
import { mockServerPool } from "../../mock-server/MockServerPool";

describe("DocumentsClient", () => {
    test("getPresignedUrl (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { data: { url: "url", expiresIn: 300 }, requestId: 1 };

        server
            .mockEndpoint()
            .get("/v1/merchants/id/documents/documentId/presigned-url")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.merchants.documents.getPresignedUrl({
            id: "id",
            documentId: "documentId",
            type: "merchant",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("getPresignedUrl (2)", async () => {
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
            .get("/v1/merchants/id/documents/documentId/presigned-url")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.documents.getPresignedUrl({
                id: "id",
                documentId: "documentId",
                type: "merchant",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("getPresignedUrl (3)", async () => {
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
            .get("/v1/merchants/id/documents/documentId/presigned-url")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.documents.getPresignedUrl({
                id: "id",
                documentId: "documentId",
                type: "merchant",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("getPresignedUrl (4)", async () => {
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
            .get("/v1/merchants/id/documents/documentId/presigned-url")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.documents.getPresignedUrl({
                id: "id",
                documentId: "documentId",
                type: "merchant",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("getPresignedUrl (5)", async () => {
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
            .get("/v1/merchants/id/documents/documentId/presigned-url")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.merchants.documents.getPresignedUrl({
                id: "id",
                documentId: "documentId",
                type: "merchant",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
