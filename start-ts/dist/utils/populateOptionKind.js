"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var kinds_1 = __importDefault(require("./data/kinds"));
function populateOptionKind() {
    var select = document.getElementById("kind");
    var options = "";
    kinds_1.default.forEach(function (item) {
        options += "<option value=\"".concat(item, "\">").concat(item, "</option>");
    });
    console.log(options);
    if (select) {
        select.innerHTML = options || "";
    }
}
exports.default = populateOptionKind;
