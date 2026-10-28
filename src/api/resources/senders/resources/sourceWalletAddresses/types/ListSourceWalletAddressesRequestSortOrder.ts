
export const ListSourceWalletAddressesRequestSortOrder = {
    Asc: "ASC",
    Desc: "DESC",
} as const;
export type ListSourceWalletAddressesRequestSortOrder =
    (typeof ListSourceWalletAddressesRequestSortOrder)[keyof typeof ListSourceWalletAddressesRequestSortOrder];
