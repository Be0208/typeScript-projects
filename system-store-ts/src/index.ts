  //Funcionalidades
// Listar Produtos: O sistema deve exibir uma lista de todos os produtos cadastrados.
// Criar Produto: O sistema deve permitir a criação de novos produtos.
// Editar Produto: O sistema deve permitir a edição dos atributos de um produto existente.
// Excluir Produto: O sistema deve permitir a exclusão de um produto existente.

import { v4 as uuid } from "uuid";
import ProductType from "../src/types/productType"
import { validateNamePrice } from "./utils";


// MEUS PRODUTOS -----------------------
const products: ProductType[] = [];
//--------------------------------------


function listProducts(){
  if (products.length === 0) return console.log("Nenhum produto cadastrado.");

  console.log("Minha lista de produtos:");
  products.forEach((product) => {
    console.table(`Nome: ${product.name}, Preço: ${product.price}`);
  });
}

function addProduct(name: string, price: number){

  if (!validateNamePrice(name, price)) {
    console.log("Nome ou preço inválido.");
    return 
  } 


  const newProduct: ProductType = {
    id: uuid(),
    name,
    price
  }
  products.push(newProduct);

  console.log("Produto cadastrado com sucesso.");
};

function editProduct(productId: string, newName: string, newPrice: number) {

  const productIdIndex = products.findIndex((product) => product.id === productId); //ele pega o id do produto que esta no index indicado
  
  if (productIdIndex === -1) return console.log("Produto não encontrado.") ;
  
  // Validar o novo nome e preço do produto
  if (!validateNamePrice(newName, newPrice)) return console.log("Novo nome ou preço inválido.");
  
  products[productIdIndex].name = newName;
  products[productIdIndex].price = newPrice;
  
  console.log("Produto atualizado com sucesso.");
}

function deleteProduct(productId: string) {
  const productIdIndex = products.findIndex((product) => product.id === productId); //ele pega o id do produto que esta no index indicado
  if (productIdIndex === -1) return console.log("Produto não encontrado.") ;

  products.splice(productIdIndex, 1); //REMOVE O PRODUTO DO ARRAY
  
  console.log("Produto excluído com sucesso.");
}



addProduct("banana", 10);
addProduct("BERGA", 5);
listProducts();

console.log("----------------------------------------------------------------");

editProduct(products[0].id, "Mouse sem fio", 15)
listProducts();

console.log("----------------------------------------------------------------");
deleteProduct(products[0].id)
listProducts();
