
/** Public lifecycle status of the current setup request. */
export const VirtualAccountSetupStatus = {
    WaitingForData: "waiting_for_data",
    WaitingForVerification: "waiting_for_verification",
    WaitingForActivation: "waiting_for_activation",
    Ready: "ready",
    Provisioning: "provisioning",
    Completed: "completed",
    Failed: "failed",
    Cancelled: "cancelled",
} as const;
export type VirtualAccountSetupStatus = (typeof VirtualAccountSetupStatus)[keyof typeof VirtualAccountSetupStatus];
