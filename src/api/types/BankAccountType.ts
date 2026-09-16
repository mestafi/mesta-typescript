
/** Type of bank account */
export const BankAccountType = {
    Savings: "savings",
    Checking: "checking",
} as const;
export type BankAccountType = (typeof BankAccountType)[keyof typeof BankAccountType];
