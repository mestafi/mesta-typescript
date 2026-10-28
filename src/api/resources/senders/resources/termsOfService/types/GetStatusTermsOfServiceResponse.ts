
export interface GetStatusTermsOfServiceResponse {
    data?: GetStatusTermsOfServiceResponse.Data | undefined;
    /** Unique identifier for this request */
    requestId?: number | undefined;
}

export namespace GetStatusTermsOfServiceResponse {
    export interface Data {
        /** Current TOS version */
        version?: string | undefined;
        /** Unique identifier for the TOS agreement */
        agreementId?: string | undefined;
        /** Timestamp when TOS was accepted */
        acceptedAt?: string | undefined;
        /** Whether the TOS has been accepted */
        isAccepted?: boolean | undefined;
        /** Whether the TOS acceptance has expired */
        isExpired?: boolean | undefined;
        /** Timestamp when the TOS agreement was generated */
        generatedAt?: string | undefined;
        /** Name of the sender */
        senderName?: string | undefined;
        /** Email address of the sender */
        senderEmail?: string | undefined;
        /** Version of the Terms of Service */
        tosVersion?: string | undefined;
        /** UI link to accept or view the Terms of Service. This link should be shared with the sender to complete TOS acceptance via web interface (not an API endpoint) */
        tosLink?: string | undefined;
        /** Authentication token for TOS acceptance */
        token?: string | undefined;
        /** Timestamp when the TOS agreement expires */
        expiresAt?: string | undefined;
        /** Current status of TOS acceptance. `accepted` means the sender has accepted the TOS, `pending` means the TOS link has been generated but not yet accepted, and `expired` means the TOS link has expired and needs to be regenerated. */
        status?: Data.Status | undefined;
    }

    export namespace Data {
        /** Current status of TOS acceptance. `accepted` means the sender has accepted the TOS, `pending` means the TOS link has been generated but not yet accepted, and `expired` means the TOS link has expired and needs to be regenerated. */
        export const Status = {
            Accepted: "accepted",
            Pending: "pending",
            Expired: "expired",
        } as const;
        export type Status = (typeof Status)[keyof typeof Status];
    }
}
