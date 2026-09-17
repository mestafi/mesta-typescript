
/**
 * Address fields to update. Omitted fields retain their existing values.
 */
export interface PatchSenderAssociateAddress {
    street?: string | undefined;
    street2?: (string | null) | undefined;
    city?: string | undefined;
    state?: (string | null) | undefined;
    postalCode?: string | undefined;
    country?: string | undefined;
}
