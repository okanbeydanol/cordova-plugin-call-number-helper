declare namespace CordovaPlugins {
    interface CallNumber {
        /**
         * Calls the given phone number.
         * @param number The phone number to call (string).
         * @param bypassAppChooser Optional. If true, bypasses the app chooser (Android only; ignored on iOS).
         * @returns A Promise that resolves if the call is successful, rejects with an error message otherwise.
         */
        callNumber(number: string, bypassAppChooser?: boolean): Promise<void>;

        /**
         * Checks if calling is supported on the device.
         * @returns A Promise that resolves with true if supported, false otherwise.
         */
        isCallSupported(): Promise<boolean>;
    }
}

interface CordovaPlugins {
    CallNumber: CordovaPlugins.CallNumber;
}

interface Cordova {
    plugins: CordovaPlugins;
}

declare let cordova: Cordova;

export const CallNumber: CordovaPlugins.CallNumber;
export as namespace CallNumber;
declare const _default: CordovaPlugins.CallNumber;
export default _default;