function CallNumber() { }

// Promise-based callNumber
CallNumber.prototype.callNumber = function (number, bypassAppChooser) {
    return new Promise((resolve, reject) => {
        cordova.exec(resolve, reject, 'CallNumber', 'callNumber', [number, bypassAppChooser]);
    });
};

// Promise-based isCallSupported
CallNumber.prototype.isCallSupported = function () {
    return new Promise((resolve, reject) => {
        cordova.exec(resolve, reject, 'CallNumber', 'isCallSupported', []);
    });
};

module.exports = new CallNumber();
module.exports.CallNumber = module.exports;

// For ES module import support
if (typeof window !== 'undefined' && window.cordova && window.cordova.plugins) {
    window.cordova.plugins.CallNumber = module.exports;
}
