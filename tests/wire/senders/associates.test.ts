
import * as Mesta from "../../../src/api/index";
import { MestaClient } from "../../../src/Client";
import { mockServerPool } from "../../mock-server/MockServerPool";

describe("AssociatesClient", () => {
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
                    senderId: "senderId",
                    firstName: "firstName",
                    lastName: "lastName",
                    birthDate: "2023-01-15",
                    email: "email",
                    phone: "phone",
                    address: { street: "street", city: "city", postalCode: "postalCode", country: "country" },
                    identity: { key: "value" },
                    nationality: "nationality",
                    roles: ["director"],
                    linkedUboId: "linkedUboId",
                    pepDeclaration: true,
                    pepQuestionnaire: { key: "value" },
                    documents: [{ key: "value" }],
                    createdAt: "2024-01-15T09:30:00Z",
                    updatedAt: "2024-01-15T09:30:00Z",
                },
            ],
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/senders/associates")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.associates.list({
            senderId: "senderId",
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
            .get("/v1/senders/associates")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.list({
                senderId: "senderId",
            });
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
            .get("/v1/senders/associates")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.list({
                senderId: "senderId",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
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
            senderId: "7e701fe5-d47b-4e44-b624-c48204cfead1",
            roles: ["director"],
            linkedUboId: "c4de346d-7972-4139-b132-974eca8b0606",
        };
        const rawResponseBody = {
            data: {
                id: "id",
                senderId: "senderId",
                firstName: "firstName",
                lastName: "lastName",
                birthDate: "2023-01-15",
                email: "email",
                phone: "phone",
                address: {
                    street: "street",
                    street2: "street2",
                    city: "city",
                    state: "state",
                    postalCode: "postalCode",
                    country: "country",
                },
                identity: { key: "value" },
                nationality: "nationality",
                roles: ["director"],
                linkedUboId: "linkedUboId",
                kyc: { status: "unverified", statusUpdatedAt: "2024-01-15T09:30:00Z" },
                pepDeclaration: true,
                pepQuestionnaire: { key: "value" },
                documents: [{ key: "value" }],
                createdAt: "2024-01-15T09:30:00Z",
                updatedAt: "2024-01-15T09:30:00Z",
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .post("/v1/senders/associates")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.associates.create({
            senderId: "7e701fe5-d47b-4e44-b624-c48204cfead1",
            roles: ["director"],
            linkedUboId: "c4de346d-7972-4139-b132-974eca8b0606",
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
            senderId: "7e701fe5-d47b-4e44-b624-c48204cfead1",
            roles: ["authorized_representative"],
            firstName: "Amina",
            lastName: "Rahman",
            birthDate: "1988-04-12",
            email: "amina.rahman@example.com",
            phone: "+442071838750",
            address: { street: "10 Example Street", city: "London", postalCode: "SW1A 1AA", country: "GB" },
            nationality: "GB",
            identity: {
                countryCode: "GB",
                documentType: "PASSPORT",
                documentNumber: "123456789",
                documentFront: "<base64-encoded-file>",
            },
        };
        const rawResponseBody = {
            data: {
                id: "id",
                senderId: "senderId",
                firstName: "firstName",
                lastName: "lastName",
                birthDate: "2023-01-15",
                email: "email",
                phone: "phone",
                address: {
                    street: "street",
                    street2: "street2",
                    city: "city",
                    state: "state",
                    postalCode: "postalCode",
                    country: "country",
                },
                identity: { key: "value" },
                nationality: "nationality",
                roles: ["director"],
                linkedUboId: "linkedUboId",
                kyc: { status: "unverified", statusUpdatedAt: "2024-01-15T09:30:00Z" },
                pepDeclaration: true,
                pepQuestionnaire: { key: "value" },
                documents: [{ key: "value" }],
                createdAt: "2024-01-15T09:30:00Z",
                updatedAt: "2024-01-15T09:30:00Z",
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .post("/v1/senders/associates")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.associates.create({
            senderId: "7e701fe5-d47b-4e44-b624-c48204cfead1",
            roles: ["authorized_representative"],
            firstName: "Amina",
            lastName: "Rahman",
            birthDate: "1988-04-12",
            email: "amina.rahman@example.com",
            phone: "+442071838750",
            address: {
                street: "10 Example Street",
                city: "London",
                postalCode: "SW1A 1AA",
                country: "GB",
            },
            nationality: "GB",
            identity: {
                countryCode: "GB",
                documentType: "PASSPORT",
                documentNumber: "123456789",
                documentFront: "<base64-encoded-file>",
            },
        });
        expect(response).toEqual(rawResponseBody);
    });

    test("create (3)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { senderId: "senderId", roles: ["director", "director"] };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/senders/associates")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.create({
                senderId: "senderId",
                roles: ["director", "director"],
            });
        }).rejects.toThrow(Mesta.BadRequestError);
    });

    test("create (4)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { senderId: "senderId", roles: ["director", "director"] };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/senders/associates")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.create({
                senderId: "senderId",
                roles: ["director", "director"],
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
    });

    test("create (5)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });
        const rawRequestBody = { senderId: "senderId", roles: ["director", "director"] };
        const rawResponseBody = { key: "value" };

        server
            .mockEndpoint()
            .post("/v1/senders/associates")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.create({
                senderId: "senderId",
                roles: ["director", "director"],
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
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
                id: "id",
                senderId: "senderId",
                firstName: "firstName",
                lastName: "lastName",
                birthDate: "2023-01-15",
                email: "email",
                phone: "phone",
                address: {
                    street: "street",
                    street2: "street2",
                    city: "city",
                    state: "state",
                    postalCode: "postalCode",
                    country: "country",
                },
                identity: { key: "value" },
                nationality: "nationality",
                roles: ["director"],
                linkedUboId: "linkedUboId",
                kyc: { status: "unverified", statusUpdatedAt: "2024-01-15T09:30:00Z" },
                pepDeclaration: true,
                pepQuestionnaire: { key: "value" },
                documents: [{ key: "value" }],
                createdAt: "2024-01-15T09:30:00Z",
                updatedAt: "2024-01-15T09:30:00Z",
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/senders/associates/associateId")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.associates.get({
            associateId: "associateId",
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
            .get("/v1/senders/associates/associateId")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.get({
                associateId: "associateId",
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
            .get("/v1/senders/associates/associateId")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.get({
                associateId: "associateId",
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
            .get("/v1/senders/associates/associateId")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.get({
                associateId: "associateId",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });

    test("delete (1)", async () => {
        const server = mockServerPool.createServer();
        const client = new MestaClient({
            maxRetries: 0,
            apiKey: "test",
            apiSecret: "test",
            environment: server.baseUrl,
        });

        server.mockEndpoint().delete("/v1/senders/associates/associateId").respondWith().statusCode(200).build();

        const response = await client.senders.associates.delete({
            associateId: "associateId",
        });
        expect(response).toEqual(undefined);
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
            .delete("/v1/senders/associates/associateId")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.delete({
                associateId: "associateId",
            });
        }).rejects.toThrow(Mesta.BadRequestError);
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
            .delete("/v1/senders/associates/associateId")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.delete({
                associateId: "associateId",
            });
        }).rejects.toThrow(Mesta.UnauthorizedError);
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
            .delete("/v1/senders/associates/associateId")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.delete({
                associateId: "associateId",
            });
        }).rejects.toThrow(Mesta.ForbiddenError);
    });

    test("delete (5)", async () => {
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
            .delete("/v1/senders/associates/associateId")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.delete({
                associateId: "associateId",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
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
                id: "id",
                senderId: "senderId",
                firstName: "firstName",
                lastName: "lastName",
                birthDate: "2023-01-15",
                email: "email",
                phone: "phone",
                address: {
                    street: "street",
                    street2: "street2",
                    city: "city",
                    state: "state",
                    postalCode: "postalCode",
                    country: "country",
                },
                identity: { key: "value" },
                nationality: "nationality",
                roles: ["director"],
                linkedUboId: "linkedUboId",
                kyc: { status: "unverified", statusUpdatedAt: "2024-01-15T09:30:00Z" },
                pepDeclaration: true,
                pepQuestionnaire: { key: "value" },
                documents: [{ key: "value" }],
                createdAt: "2024-01-15T09:30:00Z",
                updatedAt: "2024-01-15T09:30:00Z",
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .patch("/v1/senders/associates/associateId")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.associates.update({
            associateId: "associateId",
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
            .patch("/v1/senders/associates/associateId")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.update({
                associateId: "associateId",
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
            .patch("/v1/senders/associates/associateId")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.update({
                associateId: "associateId",
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
            .patch("/v1/senders/associates/associateId")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.update({
                associateId: "associateId",
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
            .patch("/v1/senders/associates/associateId")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.update({
                associateId: "associateId",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
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
                latestSession: {
                    kycLink: "kycLink",
                    status: "NOT_STARTED",
                    expiryTimestamp: 1000000,
                    createdTimestamp: 1000000,
                },
                previousSessions: [{}],
            },
            requestId: 1,
        };

        server
            .mockEndpoint()
            .get("/v1/senders/associates/associateId/verification-url")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.senders.associates.getVerificationUrl({
            associateId: "associateId",
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
            .get("/v1/senders/associates/associateId/verification-url")
            .respondWith()
            .statusCode(400)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.getVerificationUrl({
                associateId: "associateId",
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
            .get("/v1/senders/associates/associateId/verification-url")
            .respondWith()
            .statusCode(401)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.getVerificationUrl({
                associateId: "associateId",
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
            .get("/v1/senders/associates/associateId/verification-url")
            .respondWith()
            .statusCode(403)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.getVerificationUrl({
                associateId: "associateId",
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
            .get("/v1/senders/associates/associateId/verification-url")
            .respondWith()
            .statusCode(404)
            .jsonBody(rawResponseBody)
            .build();

        await expect(async () => {
            return await client.senders.associates.getVerificationUrl({
                associateId: "associateId",
            });
        }).rejects.toThrow(Mesta.NotFoundError);
    });
});
