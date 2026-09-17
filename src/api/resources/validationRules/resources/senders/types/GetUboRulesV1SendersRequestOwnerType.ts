
export const GetUboRulesV1SendersRequestOwnerType = {
    Individual: "individual",
    Business: "business",
} as const;
export type GetUboRulesV1SendersRequestOwnerType =
    (typeof GetUboRulesV1SendersRequestOwnerType)[keyof typeof GetUboRulesV1SendersRequestOwnerType];
