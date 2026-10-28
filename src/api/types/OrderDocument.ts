
import type * as Mesta from "../index.js";

export interface OrderDocument {
    /** Name of the document file */
    fileName: string;
    type: Mesta.DocumentType;
    /** Base64 encoded document content */
    blob?: string | undefined;
    /** Unique identifier for the document */
    id?: string | undefined;
    /** URL to access the document */
    url?: string | undefined;
    /** Timestamp when the document was submitted */
    submittedAt?: string | undefined;
}
