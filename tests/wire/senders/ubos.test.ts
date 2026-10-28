
import * as Mesta from "../../../src/api/index";
import { MestaClient } from "../../../src/Client";
import { mockServerPool } from "../../mock-server/MockServerPool";

describe("UbosClient", () => {
    test("create (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = {
            firstName: "firstName",
            lastName: "lastName",
            birthDate: "2023-01-15",
            phone: "phone",
            email: "email",
            ownershipPercent: 1.1,
            address: { street: "street", city: "city", postalCode: "postalCode", country: "country" },
            senderId: "senderId",
            identity: { documentType: "PASSPORT", countryCode: "countryCode", documentNumber: "documentNumber" },
            pepDeclaration: true,
        };
        const rawResponseBody = {
            data: {
                id: "id",
                firstName: "firstName",
                lastName: "lastName",
                birthDate: "2023-01-15",
                email: "email",
                phone: "phone",
                ownershipPercent: 1.1,
                nationality: "nationality",
                identificationNumber: "identificationNumber",
                pepDeclaration: true,
                senderId: "senderId",
                documents: [{}],
                kyc: { status: "unverified", statusUpdatedAt: "2024-01-15T09:30:00Z" },
                pepQuestionnaire: { declarationType: "SELF" },
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .post("/v2/senders/ubo")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.ubos.create({
            firstName: "firstName",
            lastName: "lastName",
            birthDate: "2023-01-15",
            phone: "phone",
            email: "email",
            ownershipPercent: 1.1,
            address: {
                street: "street",
                city: "city",
                postalCode: "postalCode",
                country: "country",
            },
            senderId: "senderId",
            identity: {
                documentType: "PASSPORT",
                countryCode: "countryCode",
                documentNumber: "documentNumber",
            },
            pepDeclaration: true,
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
            firstName: "firstName",
            lastName: "lastName",
            birthDate: "2023-01-15",
            phone: "phone",
            email: "email",
            ownershipPercent: 100,
            address: { street: "street", city: "city", postalCode: "postalCode", country: "country" },
            senderId: "senderId",
            identity: { documentType: "PASSPORT", countryCode: "countryCode", documentNumber: "documentNumber" },
            pepDeclaration: true,
        };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v2/senders/ubo")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.create({
                firstName: "firstName",
                lastName: "lastName",
                birthDate: "2023-01-15",
                phone: "phone",
                email: "email",
                ownershipPercent: 100,
                address: {
                    street: "street",
                    city: "city",
                    postalCode: "postalCode",
                    country: "country",
                },
                senderId: "senderId",
                identity: {
                    documentType: "PASSPORT",
                    countryCode: "countryCode",
                    documentNumber: "documentNumber",
                },
                pepDeclaration: true,
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
            firstName: "firstName",
            lastName: "lastName",
            birthDate: "2023-01-15",
            phone: "phone",
            email: "email",
            ownershipPercent: 100,
            address: { street: "street", city: "city", postalCode: "postalCode", country: "country" },
            senderId: "senderId",
            identity: { documentType: "PASSPORT", countryCode: "countryCode", documentNumber: "documentNumber" },
            pepDeclaration: true,
        };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v2/senders/ubo")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.create({
                firstName: "firstName",
                lastName: "lastName",
                birthDate: "2023-01-15",
                phone: "phone",
                email: "email",
                ownershipPercent: 100,
                address: {
                    street: "street",
                    city: "city",
                    postalCode: "postalCode",
                    country: "country",
                },
                senderId: "senderId",
                identity: {
                    documentType: "PASSPORT",
                    countryCode: "countryCode",
                    documentNumber: "documentNumber",
                },
                pepDeclaration: true,
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
            firstName: "firstName",
            lastName: "lastName",
            birthDate: "2023-01-15",
            phone: "phone",
            email: "email",
            ownershipPercent: 100,
            address: { street: "street", city: "city", postalCode: "postalCode", country: "country" },
            senderId: "senderId",
            identity: { documentType: "PASSPORT", countryCode: "countryCode", documentNumber: "documentNumber" },
            pepDeclaration: true,
        };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v2/senders/ubo")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.create({
                firstName: "firstName",
                lastName: "lastName",
                birthDate: "2023-01-15",
                phone: "phone",
                email: "email",
                ownershipPercent: 100,
                address: {
                    street: "street",
                    city: "city",
                    postalCode: "postalCode",
                    country: "country",
                },
                senderId: "senderId",
                identity: {
                    documentType: "PASSPORT",
                    countryCode: "countryCode",
                    documentNumber: "documentNumber",
                },
                pepDeclaration: true,
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
            firstName: "firstName",
            lastName: "lastName",
            birthDate: "2023-01-15",
            phone: "phone",
            email: "email",
            ownershipPercent: 100,
            address: { street: "street", city: "city", postalCode: "postalCode", country: "country" },
            senderId: "senderId",
            identity: { documentType: "PASSPORT", countryCode: "countryCode", documentNumber: "documentNumber" },
            pepDeclaration: true,
        };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v2/senders/ubo")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.create({
                firstName: "firstName",
                lastName: "lastName",
                birthDate: "2023-01-15",
                phone: "phone",
                email: "email",
                ownershipPercent: 100,
                address: {
                    street: "street",
                    city: "city",
                    postalCode: "postalCode",
                    country: "country",
                },
                senderId: "senderId",
                identity: {
                    documentType: "PASSPORT",
                    countryCode: "countryCode",
                    documentNumber: "documentNumber",
                },
                pepDeclaration: true,
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
            firstName: "firstName",
            lastName: "lastName",
            birthDate: "2023-01-15",
            phone: "phone",
            email: "email",
            ownershipPercent: 100,
            address: { street: "street", city: "city", postalCode: "postalCode", country: "country" },
            senderId: "senderId",
            identity: { documentType: "PASSPORT", countryCode: "countryCode", documentNumber: "documentNumber" },
            pepDeclaration: true,
        };
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .post("/v2/senders/ubo")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.create({
                firstName: "firstName",
                lastName: "lastName",
                birthDate: "2023-01-15",
                phone: "phone",
                email: "email",
                ownershipPercent: 100,
                address: {
                    street: "street",
                    city: "city",
                    postalCode: "postalCode",
                    country: "country",
                },
                senderId: "senderId",
                identity: {
                    documentType: "PASSPORT",
                    countryCode: "countryCode",
                    documentNumber: "documentNumber",
                },
                pepDeclaration: true,
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
                id: "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx",
                version: 4,
                createdAt: "2024-07-31T21:51:58Z",
                updatedAt: "2024-07-31T21:52:39Z",
                firstName: "John",
                lastName: "Doe",
                birthDate: "1990-01-01",
                email: "contact@example.com",
                phone: "+12025550123",
                address: {
                    street: "123 Main St",
                    city: "San Francisco",
                    state: "CA",
                    country: "US",
                    postalCode: "94101",
                },
                ownershipPercent: 25,
                identity: {
                    countryCode: "US",
                    documentType: "PASSPORT",
                    documentFront: {
                        url: "https://example-storage.com/documents/xxxx-xxxx-xxxx",
                        fileName: "passport_front.jpg",
                        fileType: "PASSPORT",
                    },
                    documentBack: {
                        url: "https://example-storage.com/documents/xxxx-xxxx-xxxx",
                        fileName: "passport_back.jpg",
                        fileType: "PASSPORT",
                    },
                    documentNumber: "123456789",
                },
                senderId: "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx",
                kyc: { status: "unverified", statusUpdatedAt: "2024-07-31T21:52:39Z" },
                nationality: "nationality",
                identificationNumber: "identificationNumber",
                pepDeclaration: false,
                documents: [{}],
                sender: {
                    id: "id",
                    version: 1,
                    createdAt: "2024-01-15T09:30:00Z",
                    updatedAt: "2024-01-15T09:30:00Z",
                    fullName: "fullName",
                    firstName: "firstName",
                    middleName: "middleName",
                    lastName: "lastName",
                    birthDate: "2023-01-15",
                    email: "email",
                    phone: "phone",
                    gender: "gender",
                    occupation: "occupation",
                    addresses: [{}],
                    merchantId: "merchantId",
                    status: "active",
                    type: "business",
                    websiteUrl: "websiteUrl",
                    identificationNumber: "identificationNumber",
                    documents: [{}],
                    metadata: { key: "value" },
                    identity: { key: "value" },
                    registrationDate: "2024-01-15T09:30:00Z",
                    businessType: "businessType",
                },
            },
            requestId: 19129,
        };

        server.mockEndpoint().get("/v1/senders/ubo/id").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.senders.ubos.get({
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

        server.mockEndpoint().get("/v1/senders/ubo/id").respondWith().statusCode(401).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.senders.ubos.get({
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

        server.mockEndpoint().get("/v1/senders/ubo/id").respondWith().statusCode(403).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.senders.ubos.get({
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

        server.mockEndpoint().get("/v1/senders/ubo/id").respondWith().statusCode(404).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.senders.ubos.get({
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

        server.mockEndpoint().get("/v1/senders/ubo/id").respondWith().statusCode(500).jsonBody(rawResponseBody).build();

        await expect(async () => {
            return await client.senders.ubos.get({
                id: "id",
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

        const rawResponseBody = { requestId: 19052 };

        server
            .mockEndpoint()
            .delete("/v1/senders/ubo/id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.ubos.delete({
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
            .delete("/v1/senders/ubo/id")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.delete({
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
            .delete("/v1/senders/ubo/id")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.delete({
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
            .delete("/v1/senders/ubo/id")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.delete({
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
            .delete("/v1/senders/ubo/id")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.delete({
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
        const rawRequestBody = {};
        const rawResponseBody = {
            data: {
                id: "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx",
                version: 1,
                createdAt: "2024-11-17T00:44:44Z",
                updatedAt: "2024-11-17T00:44:44Z",
                deletedAt: "2024-01-15T09:30:00Z",
                createdBy: "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx",
                updatedBy: "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx",
                deletedBy: "deletedBy",
                firstName: "John",
                lastName: "Doe",
                birthDate: "2023-01-15",
                email: "contact@example.com",
                phone: "+12025550123",
                address: {
                    street: "123 Main St",
                    city: "San Francisco",
                    state: "CA",
                    country: "US",
                    postalCode: "94101",
                },
                identity: { countryCode: "US", documentNumber: "XXXXX1234", documentType: "PASSPORT" },
                senderId: "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx",
                kyc: { status: "unverified", statusUpdatedAt: "2024-11-17T00:44:44Z" },
                nationality: "nationality",
                identificationNumber: "identificationNumber",
                pepDeclaration: false,
                documents: [{}],
                pepQuestionnaire: { declarationType: "SELF" },
            },
            requestId: 18563,
        };

        server
            .mockEndpoint()
            .patch("/v1/senders/ubo/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.ubos.update({
            id: "id",
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
        const rawRequestBody = {};
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .patch("/v1/senders/ubo/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.update({
                id: "id",
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
        const rawRequestBody = {};
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .patch("/v1/senders/ubo/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.update({
                id: "id",
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
        const rawRequestBody = {};
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .patch("/v1/senders/ubo/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.update({
                id: "id",
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
        const rawRequestBody = {};
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .patch("/v1/senders/ubo/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.update({
                id: "id",
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
        const rawRequestBody = {};
        const rawResponseBody = {};

        server
            .mockEndpoint()
            .patch("/v1/senders/ubo/id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.update({
                id: "id",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });

    test("getVerificationUrl (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        const rawResponseBody = {
            data: {
                latestSession: { kycLink: "kycLink", status: "NOT_STARTED", expiryTimestamp: 1, createdTimestamp: 1 },
                previousSessions: [{}],
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/senders/ubo/id/verification-url")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.ubos.getVerificationUrl({
            id: "id",
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("getVerificationUrl (2)", async () => {
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
            .get("/v1/senders/ubo/id/verification-url")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.getVerificationUrl({
                id: "id",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("getVerificationUrl (3)", async () => {
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
            .get("/v1/senders/ubo/id/verification-url")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.getVerificationUrl({
                id: "id",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("getVerificationUrl (4)", async () => {
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
            .get("/v1/senders/ubo/id/verification-url")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.getVerificationUrl({
                id: "id",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("getVerificationUrl (5)", async () => {
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
            .get("/v1/senders/ubo/id/verification-url")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.getVerificationUrl({
                id: "id",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("getVerificationUrl (6)", async () => {
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
            .get("/v1/senders/ubo/id/verification-url")
            .respondWith()
            .statusCode(500)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.ubos.getVerificationUrl({
                id: "id",
            });
        }).rejects.toThrow(Mesta.InternalServerError);
    });
});
