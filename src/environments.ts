
export const MestaEnvironment = {
    Production: "https://api.mesta.xyz",
    Sandbox: "https://api.sandbox.mesta.xyz",
    Staging: "https://api.stg.mesta.xyz",
} as const;

export type MestaEnvironment =
    | typeof MestaEnvironment.Production
    | typeof MestaEnvironment.Sandbox
    | typeof MestaEnvironment.Staging;
