// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

type Carteira = {
  saldo: number ;
  entradas: number[];
  saidas: number[];
}

const carteira: Carteira = {
  saldo: 250,
  entradas: [], 
  saidas: [],
};

export const gerenciadorCateira = {
  lancarEntradas,
  lancarSaida,
  exibirCarteira
}

 function lancarEntradas(entrada: number){
  carteira.entradas.push(entrada);
  carteira.saldo = carteira.saldo + entrada

  console.log(carteira);
}
 function lancarSaida(saidas: number){
  carteira.saidas.push(saidas);
  carteira.saldo = carteira.saldo - saidas

  console.log(carteira);
}
 function exibirCarteira(){
  console.log(carteira);
}

