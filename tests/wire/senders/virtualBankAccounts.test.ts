
import * as Mesta from "../../../src/api/index";
import { MestaClient } from "../../../src/Client";
import { mockServerPool } from "../../mock-server/MockServerPool";

describe("VirtualBankAccountsClient", () => {
    test("getSetupStatus (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            data: {
                currency: "EUR",
                status: "waiting_for_data",
                requestedAt: "2026-08-27T08:00:00Z",
                completedAt: null,
                blockers: [
                    {
                        code: "missing_data",
                        subject: { type: "ubo", id: "c4de346d-7972-4139-b132-974eca8b0606", roles: ["director"] },
                        fields: [{ name: "nationality", label: "Nationality" }],
                        action: {
                            method: "PATCH",
                            path: "/v1/senders/7e701fe5-d47b-4e44-b624-c48204cfead1/virtual-bank-accounts/EUR/setup-request/data",
                            bodyFields: ["uboDetails"],
                        },
                    },
                    {
                        code: "missing_associate",
                        subject: { type: "associate", roles: ["director"], minimumCount: 1 },
                        fields: [{ name: "roles", label: "Add 1 associate(s)" }],
                        action: {
                            method: "POST",
                            path: "/v1/senders/associates",
                            bodyFields: [
                                "senderId",
                                "linkedUboId",
                                "firstName",
                                "lastName",
                                "birthDate",
                                "email",
                                "phone",
                                "address",
                                "roles",
                                "nationality",
                                "identity",
                                "pepDeclaration",
                                "pepQuestionnaire",
                                "sofDocument",
                                "verificationReport",
                            ],
                        },
                    },
                ],
                unacceptedFields: [{ field: "field" }],
            },
            requestId: 56287106,
        };

        server
            .mockEndpoint()
            .get("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.virtualBankAccounts.getSetupStatus({
            senderId: "senderId",
            currency: "USD",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("getSetupStatus (2)", async () => {
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
            .get("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.getSetupStatus({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("getSetupStatus (3)", async () => {
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
            .get("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.getSetupStatus({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("getSetupStatus (4)", async () => {
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
            .get("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.getSetupStatus({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("getSetupStatus (5)", async () => {
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
            .get("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.getSetupStatus({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("requestSetup (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            data: {
                currency: "EUR",
                status: "waiting_for_data",
                requestedAt: "2026-08-27T08:00:00Z",
                completedAt: null,
                blockers: [
                    {
                        code: "missing_data",
                        subject: { type: "ubo", id: "c4de346d-7972-4139-b132-974eca8b0606", roles: ["director"] },
                        fields: [{ name: "nationality", label: "Nationality" }],
                        action: {
                            method: "PATCH",
                            path: "/v1/senders/7e701fe5-d47b-4e44-b624-c48204cfead1/virtual-bank-accounts/EUR/setup-request/data",
                            bodyFields: ["uboDetails"],
                        },
                    },
                    {
                        code: "missing_associate",
                        subject: { type: "associate", roles: ["director"], minimumCount: 1 },
                        fields: [{ name: "roles", label: "Add 1 associate(s)" }],
                        action: {
                            method: "POST",
                            path: "/v1/senders/associates",
                            bodyFields: [
                                "senderId",
                                "linkedUboId",
                                "firstName",
                                "lastName",
                                "birthDate",
                                "email",
                                "phone",
                                "address",
                                "roles",
                                "nationality",
                                "identity",
                                "pepDeclaration",
                                "pepQuestionnaire",
                                "sofDocument",
                                "verificationReport",
                            ],
                        },
                    },
                ],
                unacceptedFields: [{ field: "field" }],
            },
            requestId: 56287106,
        };

        server
            .mockEndpoint()
            .post("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.virtualBankAccounts.requestSetup({
            senderId: "senderId",
            currency: "USD",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("requestSetup (2)", async () => {
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
            .post("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.requestSetup({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("requestSetup (3)", async () => {
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
            .post("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.requestSetup({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("requestSetup (4)", async () => {
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
            .post("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.requestSetup({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("requestSetup (5)", async () => {
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
            .post("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(409)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.requestSetup({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.ConflictError);
    });

    test("cancelSetup (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            data: {
                currency: "EUR",
                status: "waiting_for_data",
                requestedAt: "2026-08-27T08:00:00Z",
                completedAt: null,
                blockers: [
                    {
                        code: "missing_data",
                        subject: { type: "ubo", id: "c4de346d-7972-4139-b132-974eca8b0606", roles: ["director"] },
                        fields: [{ name: "nationality", label: "Nationality" }],
                        action: {
                            method: "PATCH",
                            path: "/v1/senders/7e701fe5-d47b-4e44-b624-c48204cfead1/virtual-bank-accounts/EUR/setup-request/data",
                            bodyFields: ["uboDetails"],
                        },
                    },
                    {
                        code: "missing_associate",
                        subject: { type: "associate", roles: ["director"], minimumCount: 1 },
                        fields: [{ name: "roles", label: "Add 1 associate(s)" }],
                        action: {
                            method: "POST",
                            path: "/v1/senders/associates",
                            bodyFields: [
                                "senderId",
                                "linkedUboId",
                                "firstName",
                                "lastName",
                                "birthDate",
                                "email",
                                "phone",
                                "address",
                                "roles",
                                "nationality",
                                "identity",
                                "pepDeclaration",
                                "pepQuestionnaire",
                                "sofDocument",
                                "verificationReport",
                            ],
                        },
                    },
                ],
                unacceptedFields: [{ field: "field" }],
            },
            requestId: 56287106,
        };

        server
            .mockEndpoint()
            .delete("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.virtualBankAccounts.cancelSetup({
            senderId: "senderId",
            currency: "USD",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("cancelSetup (2)", async () => {
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
            .delete("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.cancelSetup({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("cancelSetup (3)", async () => {
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
            .delete("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.cancelSetup({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("cancelSetup (4)", async () => {
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
            .delete("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.cancelSetup({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("cancelSetup (5)", async () => {
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
            .delete("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.cancelSetup({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("updateSetupData (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = {
            senderDetails: { websiteUrl: "https://example.com", tradingAddressSameAsRegistered: true },
            uboDetails: [{ uboId: "c4de346d-7972-4139-b132-974eca8b0606", birthDate: "1990-01-01", nationality: "GB" }],
            associateDetails: [
                { associateId: "a5de346d-7972-4139-b132-974eca8b0606", nationality: "GB", birthDate: "1985-01-01" },
            ],
        };
        const rawResponseBody = {
            data: {
                currency: "EUR",
                status: "waiting_for_data",
                requestedAt: "2026-08-27T08:00:00Z",
                completedAt: null,
                blockers: [
                    {
                        code: "missing_data",
                        subject: { type: "ubo", id: "c4de346d-7972-4139-b132-974eca8b0606", roles: ["director"] },
                        fields: [{ name: "nationality", label: "Nationality" }],
                        action: {
                            method: "PATCH",
                            path: "/v1/senders/7e701fe5-d47b-4e44-b624-c48204cfead1/virtual-bank-accounts/EUR/setup-request/data",
                            bodyFields: ["uboDetails"],
                        },
                    },
                    {
                        code: "missing_associate",
                        subject: { type: "associate", roles: ["director"], minimumCount: 1 },
                        fields: [{ name: "roles", label: "Add 1 associate(s)" }],
                        action: {
                            method: "POST",
                            path: "/v1/senders/associates",
                            bodyFields: [
                                "senderId",
                                "linkedUboId",
                                "firstName",
                                "lastName",
                                "birthDate",
                                "email",
                                "phone",
                                "address",
                                "roles",
                                "nationality",
                                "identity",
                                "pepDeclaration",
                                "pepQuestionnaire",
                                "sofDocument",
                                "verificationReport",
                            ],
                        },
                    },
                ],
                unacceptedFields: [{ field: "field" }],
            },
            requestId: 56287106,
        };

        server
            .mockEndpoint()
            .patch("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request/data")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.virtualBankAccounts.updateSetupData({
            senderId: "senderId",
            currency: "USD",
            senderDetails: {
                websiteUrl: "https://example.com",
                tradingAddressSameAsRegistered: true,
            },
            uboDetails: [
                {
                    uboId: "c4de346d-7972-4139-b132-974eca8b0606",
                    birthDate: "1990-01-01",
                    nationality: "GB",
                },
            ],
            associateDetails: [
                {
                    associateId: "a5de346d-7972-4139-b132-974eca8b0606",
                    nationality: "GB",
                    birthDate: "1985-01-01",
                },
            ],
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("updateSetupData (2)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = {
            senderDetails: {
                tradingAddress: { street: "10 Example Street", city: "London", postalCode: "SW1A 1AA", country: "GB" },
            },
        };
        const rawResponseBody = {
            data: {
                currency: "EUR",
                status: "waiting_for_data",
                requestedAt: "2026-08-27T08:00:00Z",
                completedAt: null,
                blockers: [
                    {
                        code: "missing_data",
                        subject: { type: "ubo", id: "c4de346d-7972-4139-b132-974eca8b0606", roles: ["director"] },
                        fields: [{ name: "nationality", label: "Nationality" }],
                        action: {
                            method: "PATCH",
                            path: "/v1/senders/7e701fe5-d47b-4e44-b624-c48204cfead1/virtual-bank-accounts/EUR/setup-request/data",
                            bodyFields: ["uboDetails"],
                        },
                    },
                    {
                        code: "missing_associate",
                        subject: { type: "associate", roles: ["director"], minimumCount: 1 },
                        fields: [{ name: "roles", label: "Add 1 associate(s)" }],
                        action: {
                            method: "POST",
                            path: "/v1/senders/associates",
                            bodyFields: [
                                "senderId",
                                "linkedUboId",
                                "firstName",
                                "lastName",
                                "birthDate",
                                "email",
                                "phone",
                                "address",
                                "roles",
                                "nationality",
                                "identity",
                                "pepDeclaration",
                                "pepQuestionnaire",
                                "sofDocument",
                                "verificationReport",
                            ],
                        },
                    },
                ],
                unacceptedFields: [{ field: "field" }],
            },
            requestId: 56287106,
        };

        server
            .mockEndpoint()
            .patch("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request/data")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.virtualBankAccounts.updateSetupData({
            senderId: "senderId",
            currency: "USD",
            senderDetails: {
                tradingAddress: {
                    street: "10 Example Street",
                    city: "London",
                    postalCode: "SW1A 1AA",
                    country: "GB",
                },
            },
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("updateSetupData (3)", async () => {
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
            .patch("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request/data")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.updateSetupData({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("updateSetupData (4)", async () => {
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
            .patch("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request/data")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.updateSetupData({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("updateSetupData (5)", async () => {
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
            .patch("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request/data")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.updateSetupData({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("updateSetupData (6)", async () => {
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
            .patch("/v1/senders/senderId/virtual-bank-accounts/USD/setup-request/data")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.updateSetupData({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
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
            data: [
                {
                    id: "id",
                    name: "name",
                    address: "address",
                    accountNumber: "accountNumber",
                    routingDetails: [{ key: "value" }],
                    reference: "reference",
                    bic: "bic",
                    sortCode: "sortCode",
                    currency: "USD",
                    status: "status",
                },
            ],
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/senders/senderId/virtual-bank-accounts/USD")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.virtualBankAccounts.get({
            senderId: "senderId",
            currency: "USD",
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
            .get("/v1/senders/senderId/virtual-bank-accounts/USD")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.get({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
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
            .get("/v1/senders/senderId/virtual-bank-accounts/USD")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.get({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
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
            .get("/v1/senders/senderId/virtual-bank-accounts/USD")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.get({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("get (5)", async () => {
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
            .get("/v1/senders/senderId/virtual-bank-accounts/USD")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.virtualBankAccounts.get({
                senderId: "senderId",
                currency: "USD",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });
});
