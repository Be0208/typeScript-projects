"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const transformUperText_1 = __importDefault(require("./utils/transformUperText"));
const category = {
    id: (0, uuid_1.v4)(),
    name: "Tecnologia",
    enabled: true,
};
const product = {
    id: (0, uuid_1.v4)(),
    name: 'Monitor ultraWide',
    enabled: true,
    kind: 'TECH',
    description: 'monitor 29", tela ips, 144hz'
};
console.log(product);
const test = (0, transformUperText_1.default)(product.name);
console.log(test);
