
import * as errors from "./index.js";

export class MestaTimeoutError extends errors.MestaError {
    constructor(message: string, opts?: { cause?: unknown }) {
        super({
            message: message,
            cause: opts?.cause,
        });
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }

        this.name = "MestaTimeoutError";
    }
}
