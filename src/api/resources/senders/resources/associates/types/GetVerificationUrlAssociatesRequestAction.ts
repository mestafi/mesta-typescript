
export const GetVerificationUrlAssociatesRequestAction = {
    Generate: "GENERATE",
    Regenerate: "REGENERATE",
} as const;
export type GetVerificationUrlAssociatesRequestAction =
    (typeof GetVerificationUrlAssociatesRequestAction)[keyof typeof GetVerificationUrlAssociatesRequestAction];
