
export const ListDocumentTypesV1SendersRequestOwnerType = {
    Individual: "individual",
    Business: "business",
} as const;
export type ListDocumentTypesV1SendersRequestOwnerType =
    (typeof ListDocumentTypesV1SendersRequestOwnerType)[keyof typeof ListDocumentTypesV1SendersRequestOwnerType];
