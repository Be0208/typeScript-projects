"use strict";
//Funcionalidades
// Listar Produtos: O sistema deve exibir uma lista de todos os produtos cadastrados.
// Criar Produto: O sistema deve permitir a criação de novos produtos.
// Editar Produto: O sistema deve permitir a edição dos atributos de um produto existente.
// Excluir Produto: O sistema deve permitir a exclusão de um produto existente.
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const utils_1 = require("./utils");
// MEUS PRODUTOS -----------------------
const products = [];
//--------------------------------------
function listProducts() {
    if (products.length === 0)
        return console.log("Nenhum produto cadastrado.");
    console.log("Minha lista de produtos:");
    products.forEach((product) => {
        console.table(`Nome: ${product.name}, Preço: ${product.price}`);
    });
}
function addProduct(name, price) {
    if (!(0, utils_1.validateNamePrice)(name, price)) {
        console.log("Nome ou preço inválido.");
        return;
    }
    const newProduct = {
        id: (0, uuid_1.v4)(),
        name,
        price
    };
    products.push(newProduct);
    console.log("Produto cadastrado com sucesso.");
}
;
function editProduct(productId, newName, newPrice) {
    const productIdIndex = products.findIndex((product) => product.id === productId); //ele pega o id do produto que esta no index indicado
    if (productIdIndex === -1)
        return console.log("Produto não encontrado.");
    // Validar o novo nome e preço do produto
    if (!(0, utils_1.validateNamePrice)(newName, newPrice))
        return console.log("Novo nome ou preço inválido.");
    products[productIdIndex].name = newName;
    products[productIdIndex].price = newPrice;
    console.log("Produto atualizado com sucesso.");
}
function deleteProduct(productId) {
    const productIdIndex = products.findIndex((product) => product.id === productId); //ele pega o id do produto que esta no index indicado
    if (productIdIndex === -1)
        return console.log("Produto não encontrado.");
    products.splice(productIdIndex, 1); //REMOVE O PRODUTO DO ARRAY
    console.log("Produto excluído com sucesso.");
}
addProduct("banana", 10);
addProduct("BERGA", 5);
listProducts();
console.log("----------------------------------------------------------------");
editProduct(products[0].id, "Mouse sem fio", 15);
listProducts();
console.log("----------------------------------------------------------------");
deleteProduct(products[0].id);
listProducts();
