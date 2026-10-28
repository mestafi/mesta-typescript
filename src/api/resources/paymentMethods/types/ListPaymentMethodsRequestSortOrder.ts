
export const ListPaymentMethodsRequestSortOrder = {
    Asc: "ASC",
    Desc: "DESC",
} as const;
export type ListPaymentMethodsRequestSortOrder =
    (typeof ListPaymentMethodsRequestSortOrder)[keyof typeof ListPaymentMethodsRequestSortOrder];
