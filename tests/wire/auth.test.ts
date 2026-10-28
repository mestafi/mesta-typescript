
import * as Mesta from "../../src/api/index";
import { MestaClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("AuthClient", () => {
    test("merchantLogin (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { email: "email", password: "password" };
        const rawResponseBody = {
            data: {
                accessToken: "accessToken",
                refreshToken: "refreshToken",
                user: {
                    id: "id",
                    email: "email",
                    firstName: "firstName",
                    lastName: "lastName",
                    status: "status",
                    merchantId: "merchantId",
                    scope: "merchant",
                    isMfaConfigured: true,
                },
                qrCode: "qrCode",
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .post("/v1/auth/merchant/login")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.auth.merchantLogin({
            email: "email",
            password: "password",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("merchantLogin (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { email: "email", password: "password" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/auth/merchant/login")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.auth.merchantLogin({
                email: "email",
                password: "password",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("merchantLogin (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { email: "email", password: "password" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/auth/merchant/login")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.auth.merchantLogin({
                email: "email",
                password: "password",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("merchantLogin (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { email: "email", password: "password" };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/auth/merchant/login")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.auth.merchantLogin({
                email: "email",
                password: "password",
            });
        }).rejects.toThrow(Mesta.TooManyRequestsError);
    });

    test("merchantLogin (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { email: "email", password: "password" };
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/v1/auth/merchant/login")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.auth.merchantLogin({
                email: "email",
                password: "password",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });

    test("authorize (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = { data: { id: "id", entity: "entity", data: { key: "value" } }, requestId: 1 };

        server
            .mockEndpoint()
            .post("/v1/auth/authorize")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.auth.authorize();
        expect(response).toEqual(rawResponseBody);
    });

    test("authorize (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/auth/authorize")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.auth.authorize();
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("authorize (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/auth/authorize")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.auth.authorize();
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("authorize (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/auth/authorize")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(429)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.auth.authorize();
        }).rejects.toThrow(Mesta.TooManyRequestsError);
    });

    test("authorize (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/v1/auth/authorize")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.auth.authorize();
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
