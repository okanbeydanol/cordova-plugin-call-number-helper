function CallNumber() { }

CallNumber.prototype.callNumber = function (success, error, number, bypassAppChooser) {
    cordova.exec(success, error, 'CallNumber', 'callNumber', [number, bypassAppChooser]);
};

CallNumber.prototype.isCallSupported = function (success, error) {
    cordova.exec(success, error, 'CallNumber', 'isCallSupported', []);
};

module.exports = new CallNumber();
module.exports.CallNumber = module.exports; // Add this line

// For ES module import support
if (typeof window !== 'undefined' && window.cordova && window.cordova.plugins) {
    window.cordova.plugins.CallNumber = module.exports;
}
