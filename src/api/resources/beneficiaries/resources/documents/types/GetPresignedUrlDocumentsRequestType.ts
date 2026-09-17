
export const GetPresignedUrlDocumentsRequestType = {
    Identity: "identity",
    Business: "business",
} as const;
export type GetPresignedUrlDocumentsRequestType =
    (typeof GetPresignedUrlDocumentsRequestType)[keyof typeof GetPresignedUrlDocumentsRequestType];
