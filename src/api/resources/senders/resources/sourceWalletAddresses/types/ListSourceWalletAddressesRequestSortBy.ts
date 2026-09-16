
export const ListSourceWalletAddressesRequestSortBy = {
    CreatedAt: "createdAt",
    UpdatedAt: "updatedAt",
} as const;
export type ListSourceWalletAddressesRequestSortBy =
    (typeof ListSourceWalletAddressesRequestSortBy)[keyof typeof ListSourceWalletAddressesRequestSortBy];
