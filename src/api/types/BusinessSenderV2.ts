
import type * as Mesta from "../index.js";

export interface BusinessSenderV2 extends Mesta.BusinessSender, Mesta.SenderV2CommonOnboarding {
    /** Whether the sender operates as a financial institution. */
    isFinancialInstitution: boolean;
    /** Reason the sender does not have a website. Required when `websiteUrl` is not provided. */
    websiteAbsenceReason?: string | undefined;
    /** Employee count range for the business sender. */
    numberOfEmployees: BusinessSenderV2.NumberOfEmployees;
}

export namespace BusinessSenderV2 {
    /** Employee count range for the business sender. */
    export const NumberOfEmployees = {
        One: "1",
        Two10: "2-10",
        Eleven50: "11-50",
        FiftyOne200: "51-200",
        TwoHundredOne1000: "201-1000",
        OneThousand: "1000+",
        Unknown: "unknown",
    } as const;
    export type NumberOfEmployees = (typeof NumberOfEmployees)[keyof typeof NumberOfEmployees];
}
