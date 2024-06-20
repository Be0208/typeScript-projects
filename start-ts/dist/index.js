"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var utils_1 = require("./utils");
var populateOptionKind_1 = __importDefault(require("./utils/populateOptionKind"));
var category = {
    id: (0, uuid_1.v4)(),
    name: "Geral",
    enable: true,
};
var produto1 = {
    id: (0, uuid_1.v4)(),
    name: "Mouse",
    enable: false,
    kind: "TECH",
};
var produto2 = {
    id: (0, uuid_1.v4)(),
    name: "Teclado",
    enable: true,
    kind: "TECH",
};
var produto3 = {
    id: (0, uuid_1.v4)(),
    name: "Monitor",
    enable: true,
    kind: "OUTROS",
};
var lista = [];
lista.push(produto1);
lista.push(produto2);
lista.push(produto3);
var listaAtivos = (0, utils_1.veriFyDataEnable)(lista);
(0, populateOptionKind_1.default)();
console.log(listaAtivos);
