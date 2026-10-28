
export interface ListStatesValidationRulesResponse {
    data?: ListStatesValidationRulesResponse.Data | undefined;
    /** Unique identifier for the API request */
    requestId?: number | undefined;
}

export namespace ListStatesValidationRulesResponse {
    export interface Data {
        country?: string | undefined;
        states?: Data.States.Item[] | undefined;
    }

    export namespace Data {
        export type States = States.Item[];

        export namespace States {
            export interface Item {
                code?: string | undefined;
                name?: string | undefined;
            }
        }
    }
}
