
export const ListDocumentTypesBeneficiariesRequestOwnerType = {
    Individual: "individual",
    Business: "business",
} as const;
export type ListDocumentTypesBeneficiariesRequestOwnerType =
    (typeof ListDocumentTypesBeneficiariesRequestOwnerType)[keyof typeof ListDocumentTypesBeneficiariesRequestOwnerType];
