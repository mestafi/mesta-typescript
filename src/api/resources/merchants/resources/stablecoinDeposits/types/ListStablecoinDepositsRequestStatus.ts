
export const ListStablecoinDepositsRequestStatus = {
    Created: "created",
    ComplianceReviewRequired: "compliance_review_required",
    ComplianceReviewSucceeded: "compliance_review_succeeded",
    ComplianceReviewFailed: "compliance_review_failed",
} as const;
export type ListStablecoinDepositsRequestStatus =
    (typeof ListStablecoinDepositsRequestStatus)[keyof typeof ListStablecoinDepositsRequestStatus];
