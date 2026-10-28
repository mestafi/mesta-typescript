
import * as Mesta from "../../src/api/index";
import { MestaClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("PaymentMethodsClient", () => {
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
                    beneficiaryId: "550e8400-e29b-41d4-a716-446655440001",
                    merchantId: "550e8400-e29b-41d4-a716-446655440002",
                    type: "bank_account",
                    status: "compliance_review_required",
                    label: "My US Bank Account",
                    data: {
                        type: "bank_account",
                        accountNumber: "1234567890",
                        ifscCode: "EXAM0001234",
                        bic: "EXMPGB2L",
                        sortCode: "123456",
                        routingNumber: "011401533",
                        bsbNumber: "012345",
                        bankName: "Sample Bank",
                    },
                    createdAt: "2025-01-15T10:30:00Z",
                    updatedAt: "2025-01-15T10:30:00Z",
                    version: 1,
                },
            ],
            total: 25,
            hasNext: true,
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/payment-methods")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.paymentMethods.list();
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
            .get("/v1/payment-methods")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.list();
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
            .get("/v1/payment-methods")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.list();
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
            .get("/v1/payment-methods")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.list();
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
            beneficiaryId: "550e8400-e29b-41d4-a716-446655440001",
            type: "bank_account",
            data: { accountNumber: "1234567890" },
        };
        const rawResponseBody = {
            data: {
                id: "550e8400-e29b-41d4-a716-446655440000",
                beneficiaryId: "550e8400-e29b-41d4-a716-446655440001",
                merchantId: "550e8400-e29b-41d4-a716-446655440002",
                type: "bank_account",
                status: "compliance_review_required",
                label: "My US Bank Account",
                data: {
                    type: "bank_account",
                    accountNumber: "1234567890",
                    accountType: "savings",
                    ifscCode: "EXAM0001234",
                    bic: "EXMPGB2L",
                    sortCode: "123456",
                    routingNumber: "011401533",
                    branchCode: "branchCode",
                    bsbNumber: "012345",
                    remittancePurpose: "remittancePurpose",
                    transferType: "transferType",
                    bankName: "Sample Bank",
                    bankAddress: "bankAddress",
                    bankCity: "bankCity",
                    bankPostCode: "bankPostCode",
                    bankState: "bankState",
                    bankDocumentNumber: "bankDocumentNumber",
                    bankId: "bankId",
                    bankAccountCountry: "bankAccountCountry",
                    bankCountry: "bankCountry",
                },
                createdAt: "2025-01-15T10:30:00Z",
                updatedAt: "2025-01-15T10:30:00Z",
                version: 1,
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .post("/v1/payment-methods")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.paymentMethods.create({
            beneficiaryId: "550e8400-e29b-41d4-a716-446655440001",
            type: "bank_account",
            data: {
                accountNumber: "1234567890",
            },
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
            beneficiaryId: "beneficiaryId",
            type: "bank_account",
            data: { accountNumber: "accountNumber" },
        };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/payment-methods")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.create({
                beneficiaryId: "beneficiaryId",
                type: "bank_account",
                data: {
                    accountNumber: "accountNumber",
                },
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
            beneficiaryId: "beneficiaryId",
            type: "bank_account",
            data: { accountNumber: "accountNumber" },
        };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/payment-methods")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.create({
                beneficiaryId: "beneficiaryId",
                type: "bank_account",
                data: {
                    accountNumber: "accountNumber",
                },
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
            beneficiaryId: "beneficiaryId",
            type: "bank_account",
            data: { accountNumber: "accountNumber" },
        };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/payment-methods")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.create({
                beneficiaryId: "beneficiaryId",
                type: "bank_account",
                data: {
                    accountNumber: "accountNumber",
                },
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
            beneficiaryId: "beneficiaryId",
            type: "bank_account",
            data: { accountNumber: "accountNumber" },
        };
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/v1/payment-methods")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.create({
                beneficiaryId: "beneficiaryId",
                type: "bank_account",
                data: {
                    accountNumber: "accountNumber",
                },
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
                id: "550e8400-e29b-41d4-a716-446655440000",
                beneficiaryId: "550e8400-e29b-41d4-a716-446655440001",
                merchantId: "550e8400-e29b-41d4-a716-446655440002",
                type: "bank_account",
                status: "compliance_review_required",
                label: "My US Bank Account",
                data: {
                    type: "bank_account",
                    accountNumber: "1234567890",
                    accountType: "savings",
                    ifscCode: "EXAM0001234",
                    bic: "EXMPGB2L",
                    sortCode: "123456",
                    routingNumber: "011401533",
                    branchCode: "branchCode",
                    bsbNumber: "012345",
                    remittancePurpose: "remittancePurpose",
                    transferType: "transferType",
                    bankName: "Sample Bank",
                    bankAddress: "bankAddress",
                    bankCity: "bankCity",
                    bankPostCode: "bankPostCode",
                    bankState: "bankState",
                    bankDocumentNumber: "bankDocumentNumber",
                    bankId: "bankId",
                    bankAccountCountry: "bankAccountCountry",
                    bankCountry: "bankCountry",
                },
                createdAt: "2025-01-15T10:30:00Z",
                updatedAt: "2025-01-15T10:30:00Z",
                version: 1,
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/payment-methods/id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.paymentMethods.get({
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

        server
            .mockEndpoint()
            .get("/v1/payment-methods/id")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.get({
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
            .get("/v1/payment-methods/id")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.get({
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
            .get("/v1/payment-methods/id")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.get({
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
            .get("/v1/payment-methods/id")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.get({
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
        const rawRequestBody = { type: "bank_account", data: { accountNumber: "1234567890" } };
        const rawResponseBody = {
            data: {
                id: "550e8400-e29b-41d4-a716-446655440000",
                beneficiaryId: "550e8400-e29b-41d4-a716-446655440001",
                merchantId: "550e8400-e29b-41d4-a716-446655440002",
                type: "bank_account",
                status: "compliance_review_required",
                label: "My US Bank Account",
                data: {
                    type: "bank_account",
                    accountNumber: "1234567890",
                    accountType: "savings",
                    ifscCode: "EXAM0001234",
                    bic: "EXMPGB2L",
                    sortCode: "123456",
                    routingNumber: "011401533",
                    branchCode: "branchCode",
                    bsbNumber: "012345",
                    remittancePurpose: "remittancePurpose",
                    transferType: "transferType",
                    bankName: "Sample Bank",
                    bankAddress: "bankAddress",
                    bankCity: "bankCity",
                    bankPostCode: "bankPostCode",
                    bankState: "bankState",
                    bankDocumentNumber: "bankDocumentNumber",
                    bankId: "bankId",
                    bankAccountCountry: "bankAccountCountry",
                    bankCountry: "bankCountry",
                },
                createdAt: "2025-01-15T10:30:00Z",
                updatedAt: "2025-01-15T10:30:00Z",
                version: 1,
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .put("/v1/payment-methods/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.paymentMethods.update({
            id: "id",
            type: "bank_account",
            data: {
                accountNumber: "1234567890",
            },
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
        const rawRequestBody = { type: "bank_account", data: { accountNumber: "accountNumber" } };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .put("/v1/payment-methods/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.update({
                id: "id",
                type: "bank_account",
                data: {
                    accountNumber: "accountNumber",
                },
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
        const rawRequestBody = { type: "bank_account", data: { accountNumber: "accountNumber" } };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .put("/v1/payment-methods/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.update({
                id: "id",
                type: "bank_account",
                data: {
                    accountNumber: "accountNumber",
                },
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
        const rawRequestBody = { type: "bank_account", data: { accountNumber: "accountNumber" } };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .put("/v1/payment-methods/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.update({
                id: "id",
                type: "bank_account",
                data: {
                    accountNumber: "accountNumber",
                },
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
        const rawRequestBody = { type: "bank_account", data: { accountNumber: "accountNumber" } };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .put("/v1/payment-methods/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.update({
                id: "id",
                type: "bank_account",
                data: {
                    accountNumber: "accountNumber",
                },
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
        const rawRequestBody = { type: "bank_account", data: { accountNumber: "accountNumber" } };
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .put("/v1/payment-methods/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.update({
                id: "id",
                type: "bank_account",
                data: {
                    accountNumber: "accountNumber",
                },
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

        const rawResponseBody = { data: { key: "value" }, requestId: 1 };

        server
            .mockEndpoint()
            .delete("/v1/payment-methods/id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.paymentMethods.delete({
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

        server
            .mockEndpoint()
            .delete("/v1/payment-methods/id")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.delete({
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

        server
            .mockEndpoint()
            .delete("/v1/payment-methods/id")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.delete({
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

        server
            .mockEndpoint()
            .delete("/v1/payment-methods/id")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.delete({
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

        server
            .mockEndpoint()
            .delete("/v1/payment-methods/id")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.delete({
                id: "id",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });

    test("decideConsent (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = {};
        const rawResponseBody = {
            data: {
                id: "550e8400-e29b-41d4-a716-446655440000",
                beneficiaryId: "550e8400-e29b-41d4-a716-446655440001",
                merchantId: "550e8400-e29b-41d4-a716-446655440002",
                type: "bank_account",
                status: "compliance_review_required",
                label: "My US Bank Account",
                data: {
                    type: "bank_account",
                    accountNumber: "1234567890",
                    accountType: "savings",
                    ifscCode: "EXAM0001234",
                    bic: "EXMPGB2L",
                    sortCode: "123456",
                    routingNumber: "011401533",
                    branchCode: "branchCode",
                    bsbNumber: "012345",
                    remittancePurpose: "remittancePurpose",
                    transferType: "transferType",
                    bankName: "Sample Bank",
                    bankAddress: "bankAddress",
                    bankCity: "bankCity",
                    bankPostCode: "bankPostCode",
                    bankState: "bankState",
                    bankDocumentNumber: "bankDocumentNumber",
                    bankId: "bankId",
                    bankAccountCountry: "bankAccountCountry",
                    bankCountry: "bankCountry",
                },
                createdAt: "2025-01-15T10:30:00Z",
                updatedAt: "2025-01-15T10:30:00Z",
                version: 1,
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .patch("/v1/payment-methods/id/consent")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.paymentMethods.decideConsent({
            id: "id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("decideConsent (2)", async () => {
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
            .patch("/v1/payment-methods/id/consent")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.decideConsent({
                id: "id",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("decideConsent (3)", async () => {
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
            .patch("/v1/payment-methods/id/consent")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.decideConsent({
                id: "id",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("decideConsent (4)", async () => {
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
            .patch("/v1/payment-methods/id/consent")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.decideConsent({
                id: "id",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("decideConsent (5)", async () => {
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
            .patch("/v1/payment-methods/id/consent")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.decideConsent({
                id: "id",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("decideConsent (6)", async () => {
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
            .patch("/v1/payment-methods/id/consent")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.paymentMethods.decideConsent({
                id: "id",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
