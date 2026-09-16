
/** Role held by a Director or Authorized Representative. */
export const SenderAssociateRole = {
    Director: "director",
    AuthorizedRepresentative: "authorized_representative",
} as const;
export type SenderAssociateRole = (typeof SenderAssociateRole)[keyof typeof SenderAssociateRole];
