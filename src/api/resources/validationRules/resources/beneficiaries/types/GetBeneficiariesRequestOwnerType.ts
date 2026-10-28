
export const GetBeneficiariesRequestOwnerType = {
    Individual: "individual",
    Business: "business",
} as const;
export type GetBeneficiariesRequestOwnerType =
    (typeof GetBeneficiariesRequestOwnerType)[keyof typeof GetBeneficiariesRequestOwnerType];
