import { v4 as uuid } from "uuid";
import { CategoryType, ProductType } from "./types";
import { veriFyDataEnable } from "./utils";
import populateOptionKind from "./utils/populateOptionKind";

const category: CategoryType = {
  id: uuid(),
  name: "Geral",
  enable: true,
};

const produto1: ProductType = {
  id: uuid(),
  name: "Mouse",
  enable: false,
  kind: "TECH",
};

const produto2: ProductType = {
  id: uuid(),
  name: "Teclado",
  enable: true,
  kind: "TECH",
};

const produto3: ProductType = {
  id: uuid(),
  name: "Monitor",
  enable: true,
  kind: "OUTROS",
};

const lista: ProductType[] = [];
lista.push(produto1);
lista.push(produto2);
lista.push(produto3);

const listaAtivos = veriFyDataEnable(lista);

populateOptionKind();

console.log(listaAtivos);
