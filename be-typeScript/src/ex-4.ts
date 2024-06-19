// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.

type Produto = {
  nome: string;
};

const listaDeProdutos: Produto[] = [];

export const gerenciadorDeProdutos = {
  cadastrarProduto,
  listarProdutos,
  excluirProduto,
};

function cadastrarProduto(produto: Produto) {
  listaDeProdutos.push(produto);
  console.log(`Produto "${produto.nome}" cadastrado`);
  console.log(listaDeProdutos);
}

function listarProdutos() {
  console.log("Lista de Produtos:");
  listaDeProdutos.forEach((produto, index) => {
    console.log(`${index + 1}. ${produto.nome}`);
  });
}

function excluirProduto(nome: string) {
  const index = listaDeProdutos.findIndex(produto => produto.nome === nome);

  listaDeProdutos.splice(index, 1);
  console.log(`Produto "${nome}" excluído com sucesso!`);
  console.log(listaDeProdutos);
}