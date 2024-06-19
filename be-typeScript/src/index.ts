
//   EX-1
console.log("---------------------EX 1---------------------------");
import { calcularMedia } from "./ex-1";
const resultado = calcularMedia(5, 4);
console.log(resultado);


//   EX-2
console.log("---------------------EX 2---------------------------");
import { calcularMediaPonderada } from "./ex-2";
const listaNotas1 = [
  { nota: 7, peso: 2 },
  { nota: 8, peso: 3 }
];

const resultado1 = calcularMediaPonderada(listaNotas1);

console.log(`Média ponderada: ${resultado1}`);



//   EX-3
console.log("---------------------EX 3---------------------------");

import { gerenciadorCateira } from "./ex-3";

gerenciadorCateira.exibirCarteira();
gerenciadorCateira.lancarEntradas(600);
gerenciadorCateira.lancarSaida(250);


//   EX-4
console.log("---------------------EX 4---------------------------");


import { gerenciadorDeProdutos } from "./ex-4";

gerenciadorDeProdutos.cadastrarProduto({ nome: "Banana2" });

gerenciadorDeProdutos.cadastrarProduto({ nome: "Maça1" });

gerenciadorDeProdutos.listarProdutos();

gerenciadorDeProdutos.excluirProduto("Banana2");
gerenciadorDeProdutos.listarProdutos();


//   EX-5
console.log("---------------------EX 5---------------------------");
import { userDaphne, userBernardo, showUser } from './ex-5';

showUser(userDaphne);
showUser(userBernardo);

//   EX-6
console.log("---------------------EX 6---------------------------");
import { diretorDaphne, diretorBernardo, mostrarInformacoesDiretor } from './ex-6';

mostrarInformacoesDiretor(diretorDaphne);
mostrarInformacoesDiretor(diretorBernardo);

//   EX-7
console.log("---------------------EX 7---------------------------");

import { mostrarInformacoesFuncionarios} from './ex-7';

mostrarInformacoesFuncionarios()


