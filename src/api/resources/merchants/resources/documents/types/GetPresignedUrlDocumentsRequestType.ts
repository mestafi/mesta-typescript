
export const GetPresignedUrlDocumentsRequestType = {
    Merchant: "merchant",
    Ubo: "ubo",
} as const;
export type GetPresignedUrlDocumentsRequestType =
    (typeof GetPresignedUrlDocumentsRequestType)[keyof typeof GetPresignedUrlDocumentsRequestType];
