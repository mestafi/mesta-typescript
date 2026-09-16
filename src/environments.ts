
export const MestaEnvironment = {
    Production: "https://api.mesta.xyz",
    Staging: "https://api.stg.mesta.xyz",
} as const;

export type MestaEnvironment = typeof MestaEnvironment.Production | typeof MestaEnvironment.Staging;
