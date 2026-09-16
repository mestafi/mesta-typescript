
export const ListPaymentTypesBeneficiariesRequestOwnerType = {
    Individual: "individual",
    Business: "business",
} as const;
export type ListPaymentTypesBeneficiariesRequestOwnerType =
    (typeof ListPaymentTypesBeneficiariesRequestOwnerType)[keyof typeof ListPaymentTypesBeneficiariesRequestOwnerType];
