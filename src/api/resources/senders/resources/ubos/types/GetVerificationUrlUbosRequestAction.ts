
export const GetVerificationUrlUbosRequestAction = {
    Generate: "GENERATE",
    Regenerate: "REGENERATE",
} as const;
export type GetVerificationUrlUbosRequestAction =
    (typeof GetVerificationUrlUbosRequestAction)[keyof typeof GetVerificationUrlUbosRequestAction];
