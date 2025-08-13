function CallNumber() { }

CallNumber.prototype.callNumber = function (success, failure, number, bypassAppChooser) {
    cordova.exec(success, failure, "CallNumber", "callNumber", [number, bypassAppChooser]);
};

CallNumber.prototype.isCallSupported = function (success, failure) {
    cordova.exec(success, failure, "CallNumber", "isCallSupported");
}


module.exports = new CallNumber();
module.exports.CallNumber = module.exports;

// For ES module import support
if (typeof window !== 'undefined' && window.cordova && window.cordova.plugins) {
    window.cordova.plugins.CallNumber = module.exports;
}