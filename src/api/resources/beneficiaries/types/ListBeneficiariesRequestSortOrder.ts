
export const ListBeneficiariesRequestSortOrder = {
    Asc: "ASC",
    Desc: "DESC",
} as const;
export type ListBeneficiariesRequestSortOrder =
    (typeof ListBeneficiariesRequestSortOrder)[keyof typeof ListBeneficiariesRequestSortOrder];
