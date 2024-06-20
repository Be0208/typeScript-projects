"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateNamePrice(name, price) {
    if (name.length <= 1) {
        console.log("Nome inválido");
        return false;
    }
    if (price <= 0) {
        console.log("Preço inválido");
        return false;
    }
    return true;
}
exports.default = validateNamePrice;
