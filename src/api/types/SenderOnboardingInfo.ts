
/**
 * Compliance onboarding information captured for the sender.
 */
export interface SenderOnboardingInfo {
    /** Whether the sender operates as a financial institution. */
    isFinancialInstitution?: boolean | undefined;
    /** Reason the sender does not have a website. */
    websiteAbsenceReason?: (string | null) | undefined;
    /** Expected monthly transaction volume estimate for the sender. */
    expectedMonthlyVolumeEstimate?: number | undefined;
    /** Expected average transaction size for the sender. */
    averageTransactionSize?: number | undefined;
    /** Primary jurisdictions the sender expects to transact with. Each value must be an ISO 3166-1 alpha-2 country code. */
    primaryCounterpartyJurisdictions?: string[] | undefined;
    /** Primary purposes for the sender's payments. */
    natureOfPayments?: SenderOnboardingInfo.NatureOfPayments.Item[] | undefined;
    /** Employee count range for the business sender. */
    numberOfEmployees?: (SenderOnboardingInfo.NumberOfEmployees | null) | undefined;
    /** Primary source of funds for the sender. */
    sourceOfFunds?: SenderOnboardingInfo.SourceOfFunds | undefined;
}

export namespace SenderOnboardingInfo {
    export type NatureOfPayments = NatureOfPayments.Item[];

    export namespace NatureOfPayments {
        export const Item = {
            Payroll: "payroll",
            OperationalExpense: "operational_expense",
            VendorPayment: "vendor_payment",
            SubsidiaryTransfer: "subsidiary_transfer",
            AccountingServices: "accounting_services",
            AdministrativeExpenses: "administrative_expenses",
            BusinessProfits: "business_profits",
            BusinessTravel: "business_travel",
            EducationalExpenses: "educational_expenses",
            EmployeeSalary: "employee_salary",
            FamilyMaintenanceSaving: "family_maintenance_saving",
            FinancialLease: "financial_lease",
            FinesAndPenalties: "fines_and_penalties",
            FreelancerPayment: "freelancer_payment",
            HotelExpenses: "hotel_expenses",
            InsurancePremium: "insurance_premium",
            InterestOnLoans: "interest_on_loans",
            InvestmentInRealEstate: "investment_in_real_estate",
            InvestmentInSecurities: "investment_in_securities",
            InvestmentInShares: "investment_in_shares",
            LegalServices: "legal_services",
            MedicalExpenses: "medical_expenses",
            OtherPersonalServices: "other_personal_services",
            PaymentForGoodsAndServices: "payment_for_goods_and_services",
            PersonalTravelAndTour: "personal_travel_and_tour",
            PilgrimageReligiousRelated: "pilgrimage_religious_related",
            RepaymentOfLoan: "repayment_of_loan",
            ResearchAndDevelopmentServices: "research_and_development_services",
            TaxPayment: "tax_payment",
            TelecommunicationServices: "telecommunication_services",
            WorkersRemittances: "workers_remittances",
        } as const;
        export type Item = (typeof Item)[keyof typeof Item];
    }

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
    /** Primary source of funds for the sender. */
    export const SourceOfFunds = {
        AdvanceFromDirector: "advance_from_director",
        AdvanceFromShareholder: "advance_from_shareholder",
        BusinessIncome: "business_income",
        Claims: "claims",
        Compensation: "compensation",
        FinancialSupportFromChildren: "financial_support_from_children",
        FinancialSupportFromParents: "financial_support_from_parents",
        FinancialSupportFromSpouse: "financial_support_from_spouse",
        FreelanceIncome: "freelance_income",
        Gambling: "gambling",
        Insurance: "insurance",
        InterestIncome: "interest_income",
        DividendIncome: "dividend_income",
        IssueOfBond: "issue_of_bond",
        IssueOfDebenture: "issue_of_debenture",
        IssueOfShare: "issue_of_share",
        Loans: "loans",
        PropertyInvestment: "property_investment",
        RentalIncome: "rental_income",
        LeasingIncome: "leasing_income",
        RetirementFunds: "retirement_funds",
        Salary: "salary",
        Saving: "saving",
        SalesOfAssets: "sales_of_assets",
        ShareInvestment: "share_investment",
        TaxRefund: "tax_refund",
        VentureCapital: "venture_capital",
    } as const;
    export type SourceOfFunds = (typeof SourceOfFunds)[keyof typeof SourceOfFunds];
}
