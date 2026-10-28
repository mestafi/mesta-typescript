
import type * as Mesta from "../index.js";

/**
 * Additional compliance onboarding fields required for v2 sender creation.
 */
export interface SenderV2CommonOnboarding {
    /** Optional virtual bank account capabilities requested during onboarding. Capability acceptance is reported in the create-sender response; sender creation does not fail solely because a requested capability is unavailable. */
    capabilities?: Mesta.PublicSenderCapability[] | undefined;
    /** Expected monthly transaction volume estimate for the sender. */
    expectedMonthlyVolumeEstimate: number;
    /** Expected average transaction size for the sender. */
    averageTransactionSize: number;
    /** Primary jurisdictions the sender expects to transact with. Each value must be an ISO 3166-1 alpha-2 country code. */
    primaryCounterpartyJurisdictions: string[];
    /** Primary purposes for the sender's payments. */
    natureOfPayments: SenderV2CommonOnboarding.NatureOfPayments.Item[];
    /** Primary source of funds for the sender. */
    sourceOfFunds: SenderV2CommonOnboarding.SourceOfFunds;
}

export namespace SenderV2CommonOnboarding {
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
