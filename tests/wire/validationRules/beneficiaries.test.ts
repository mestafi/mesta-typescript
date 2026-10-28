
import * as Mesta from "../../../src/api/index";
import { MestaClient } from "../../../src/Client";
import { mockServerPool } from "../../mock-server/MockServerPool";

describe("BeneficiariesClient", () => {
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
                id: "5c68b96c-f6df-4a8c-aeba-5ed2ad087d7f",
                version: 2,
                createdAt: "2024-10-25T16:29:43Z",
                updatedAt: "2024-11-04T10:56:00Z",
                deletedAt: "2024-01-15T09:30:00Z",
                createdBy: "05663808-dbf0-4ae5-9378-c9d1ad7d9432",
                updatedBy: "05663808-dbf0-4ae5-9378-c9d1ad7d9432",
                deletedBy: "deletedBy",
                owner: "beneficiary",
                ownerType: "individual",
                country: "CO",
                rules: {
                    requiredFields: [{ field: "field", description: "description" }],
                    paymentTypes: [{}],
                    requiredDocuments: [{ type: "type", description: "description" }],
                },
            },
            requestId: 20826,
        };

        server
            .mockEndpoint()
            .get("/v1/validation-rules/beneficiaries")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.validationRules.beneficiaries.get({
            ownerType: "individual",
            country: "country",
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
            .get("/v1/validation-rules/beneficiaries")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.get({
                ownerType: "individual",
                country: "country",
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
            .get("/v1/validation-rules/beneficiaries")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.get({
                ownerType: "individual",
                country: "country",
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
            .get("/v1/validation-rules/beneficiaries")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.get({
                ownerType: "individual",
                country: "country",
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
            .get("/v1/validation-rules/beneficiaries")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.get({
                ownerType: "individual",
                country: "country",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });

    test("listDocumentTypes (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            data: {
                id: "id",
                version: 1,
                createdAt: "2024-01-15T09:30:00Z",
                updatedAt: "2024-01-15T09:30:00Z",
                deletedAt: "2024-01-15T09:30:00Z",
                createdBy: "createdBy",
                updatedBy: "updatedBy",
                deletedBy: "deletedBy",
                owner: "beneficiary",
                ownerType: "individual",
                country: "country",
                rules: { requiredDocuments: [{}] },
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/validation-rules/beneficiaries/document-types")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.validationRules.beneficiaries.listDocumentTypes({
            ownerType: "individual",
            country: "country",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("listDocumentTypes (2)", async () => {
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
            .get("/v1/validation-rules/beneficiaries/document-types")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.listDocumentTypes({
                ownerType: "individual",
                country: "country",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("listDocumentTypes (3)", async () => {
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
            .get("/v1/validation-rules/beneficiaries/document-types")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.listDocumentTypes({
                ownerType: "individual",
                country: "country",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("listDocumentTypes (4)", async () => {
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
            .get("/v1/validation-rules/beneficiaries/document-types")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.listDocumentTypes({
                ownerType: "individual",
                country: "country",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("listDocumentTypes (5)", async () => {
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
            .get("/v1/validation-rules/beneficiaries/document-types")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.listDocumentTypes({
                ownerType: "individual",
                country: "country",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });

    test("listPaymentTypes (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            data: {
                id: "5c68b96c-f6df-4a8c-aeba-5ed2ad087d7f",
                version: 2,
                createdAt: "2024-10-25T16:29:43Z",
                updatedAt: "2024-11-04T10:56:00Z",
                deletedAt: "2024-01-15T09:30:00Z",
                createdBy: "05663808-dbf0-4ae5-9378-c9d1ad7d9432",
                updatedBy: "05663808-dbf0-4ae5-9378-c9d1ad7d9432",
                deletedBy: "deletedBy",
                owner: "beneficiary",
                ownerType: "individual",
                country: "CO",
                rules: { paymentTypes: [{}] },
            },
            requestId: 21126,
        };

        server
            .mockEndpoint()
            .get("/v1/validation-rules/beneficiaries/payment-types")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.validationRules.beneficiaries.listPaymentTypes({
            ownerType: "individual",
            country: "country",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("listPaymentTypes (2)", async () => {
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
            .get("/v1/validation-rules/beneficiaries/payment-types")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.listPaymentTypes({
                ownerType: "individual",
                country: "country",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("listPaymentTypes (3)", async () => {
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
            .get("/v1/validation-rules/beneficiaries/payment-types")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.listPaymentTypes({
                ownerType: "individual",
                country: "country",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("listPaymentTypes (4)", async () => {
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
            .get("/v1/validation-rules/beneficiaries/payment-types")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.listPaymentTypes({
                ownerType: "individual",
                country: "country",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("listPaymentTypes (5)", async () => {
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
            .get("/v1/validation-rules/beneficiaries/payment-types")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.listPaymentTypes({
                ownerType: "individual",
                country: "country",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });

    test("listCountries (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = { data: ["PH"], requestId: 1 };

        server
            .mockEndpoint()
            .get("/v1/validation-rules/beneficiaries/countries")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.validationRules.beneficiaries.listCountries();
        expect(response).toEqual(rawResponseBody);
    });

    test("listCountries (2)", async () => {
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
            .get("/v1/validation-rules/beneficiaries/countries")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.listCountries();
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("listCountries (3)", async () => {
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
            .get("/v1/validation-rules/beneficiaries/countries")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.listCountries();
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("listCountries (4)", async () => {
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
            .get("/v1/validation-rules/beneficiaries/countries")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.validationRules.beneficiaries.listCountries();
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
