
import * as Mesta from "../../src/api/index";
import { MestaClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("EventsClient", () => {
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
                    name: "name",
                    aggregateType: "aggregateType",
                    aggregateId: "aggregateId",
                    merchantId: "merchantId",
                    payload: { key: "value" },
                    createdAt: "2024-01-15T09:30:00Z",
                },
            ],
            total: 1,
            page: 1,
            pageSize: 1,
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/external-events")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.events.list();
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
            .get("/v1/external-events")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.events.list();
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
            .get("/v1/external-events")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.events.list();
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
            .get("/v1/external-events")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.events.list();
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
