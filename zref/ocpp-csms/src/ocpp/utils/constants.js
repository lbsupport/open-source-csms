/**
 * OCPP 1.6 Constants
 * These are the standard OCPP message types and values
 */

export const OCPP_MESSAGE_TYPES = {
    CALL: 2,           // Request message
    CALL_RESULT: 3,    // Response message
    CALL_ERROR: 4      // Error message
};

export const OCPP_ACTIONS = {
    // Core Profile
    BOOT_NOTIFICATION: "BootNotification",
    HEARTBEAT: "Heartbeat",
    STATUS_NOTIFICATION: "StatusNotification",
    AUTHORIZE: "Authorize",
    START_TRANSACTION: "StartTransaction",
    STOP_TRANSACTION: "StopTransaction",
    METER_VALUES: "MeterValues",

    // Remote Trigger Profile
    REMOTE_START_TRANSACTION: "RemoteStartTransaction",
    REMOTE_STOP_TRANSACTION: "RemoteStopTransaction",
    RESET: "Reset",

    // Configuration Profile
    CHANGE_CONFIGURATION: "ChangeConfiguration",
    GET_CONFIGURATION: "GetConfiguration",

    // Other
    DATA_TRANSFER: "DataTransfer",
    DIAGNOSTICS_STATUS_NOTIFICATION: "DiagnosticsStatusNotification",
    FIRMWARE_STATUS_NOTIFICATION: "FirmwareStatusNotification"
};

export const OCPP_STATUS_VALUES = {
    BOOT_NOTIFICATION: {
        ACCEPTED: "Accepted",
        REJECTED: "Rejected"
    },
    AUTHORIZE: {
        ACCEPTED: "Accepted",
        INVALID: "Invalid",
        BLOCKED: "Blocked",
        EXPIRED: "Expired",
        CONCURRENT_TX: "ConcurrentTx"
    },
    TRANSACTION: {
        ACCEPTED: "Accepted",
        INVALID: "Invalid"
    }
};

export const CONNECTOR_STATUS = {
    AVAILABLE: "Available",
    PREPARING: "Preparing",
    CHARGING: "Charging",
    SUSPENDED_EVSE: "SuspendedEVSE",
    SUSPENDED_EV: "SuspendedEV",
    FINISHING: "Finishing",
    RESERVED: "Reserved",
    UNAVAILABLE: "Unavailable",
    FAULTED: "Faulted"
};