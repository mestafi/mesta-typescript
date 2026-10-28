
export const GetPresignedUrlDocumentsRequestType = {
    Identity: "identity",
    Ubo: "ubo",
    Business: "business",
} as const;
export type GetPresignedUrlDocumentsRequestType =
    (typeof GetPresignedUrlDocumentsRequestType)[keyof typeof GetPresignedUrlDocumentsRequestType];
