
export const ListBeneficiariesRequestSortBy = {
    CreatedAt: "createdAt",
    UpdatedAt: "updatedAt",
} as const;
export type ListBeneficiariesRequestSortBy =
    (typeof ListBeneficiariesRequestSortBy)[keyof typeof ListBeneficiariesRequestSortBy];
