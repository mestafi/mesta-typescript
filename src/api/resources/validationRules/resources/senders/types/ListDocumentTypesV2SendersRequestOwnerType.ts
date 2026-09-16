
export const ListDocumentTypesV2SendersRequestOwnerType = {
    Individual: "individual",
    Business: "business",
} as const;
export type ListDocumentTypesV2SendersRequestOwnerType =
    (typeof ListDocumentTypesV2SendersRequestOwnerType)[keyof typeof ListDocumentTypesV2SendersRequestOwnerType];
