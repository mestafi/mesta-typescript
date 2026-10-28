
import type * as Mesta from "../index.js";

/**
 * Document to attach to an order
 */
export interface OrderDocumentInput {
    /** Name of the file */
    fileName: string;
    type: Mesta.DocumentType;
    /** Base64-encoded file content (PNG, JPG, JPEG, or PDF) */
    blob: string;
}
