
/**
 * The Go live form's answers, sent to Mesta's sales team with the request and stored with the sandbox until it is purged. A new request replaces them.
 */
export interface SandboxProductionRequest {
    /** Your business's legal name. */
    legalName: string;
    /** Your business's country, as an ISO 3166-1 alpha-2 code. */
    country: string;
    /** What you will use Mesta for. */
    useCase: string;
    /** Your business's website, an https URL. */
    website?: string | undefined;
    /** Your expected monthly volume in USD. */
    volumeBand?: SandboxProductionRequest.VolumeBand | undefined;
    /** The month you aim to go live, as YYYY-MM. */
    targetMonth?: string | undefined;
    /** An optional note to Mesta. */
    note?: string | undefined;
}

export namespace SandboxProductionRequest {
    /** Your expected monthly volume in USD. */
    export const VolumeBand = {
        Under100K: "under_100k",
        OneHundredKTo1M: "100k_to_1m",
        OneMTo10M: "1m_to_10m",
        Over10M: "over_10m",
    } as const;
    export type VolumeBand = (typeof VolumeBand)[keyof typeof VolumeBand];
}
