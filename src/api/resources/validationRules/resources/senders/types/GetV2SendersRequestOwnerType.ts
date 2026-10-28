
export const GetV2SendersRequestOwnerType = {
    Individual: "individual",
    Business: "business",
} as const;
export type GetV2SendersRequestOwnerType =
    (typeof GetV2SendersRequestOwnerType)[keyof typeof GetV2SendersRequestOwnerType];
