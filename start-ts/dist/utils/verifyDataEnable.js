"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function veriFyDataEnable(data) {
    var filtered = data.filter(function (item) {
        if (item.enable) {
            return item;
        }
    });
    return filtered;
}
exports.default = veriFyDataEnable;
