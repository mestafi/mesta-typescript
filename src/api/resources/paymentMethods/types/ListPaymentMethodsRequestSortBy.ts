
export const ListPaymentMethodsRequestSortBy = {
    CreatedAt: "createdAt",
    UpdatedAt: "updatedAt",
} as const;
export type ListPaymentMethodsRequestSortBy =
    (typeof ListPaymentMethodsRequestSortBy)[keyof typeof ListPaymentMethodsRequestSortBy];
