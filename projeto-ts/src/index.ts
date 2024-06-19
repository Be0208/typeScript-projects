// A tipagem estática em TypeScript permite definir tipos de variáveis, 
// funções, parâmetros e retornos, ajudando a evitar erros durante a
//  compilação. Aqui estão alguns exemplos de tipagem estática:

import { exibirCarteira, lancarEntradas, lancarSaida } from "./ex-3";



// Tipos Básicos:

let age: number = 10;
let nome : string = "Alice";
let isStudent: boolean = true;



// Arrays:


let scores: number[] = [90, 85, 88];
let names: string[] = ["Alice", "Bob", "Charlie"];



// Funções:


function add(a: number, b: number): number {
  return a + b;
}

let sum: number = add(5, 10);



// Parâmetros Opcionais:

function greet(name: string, greeting?: string): string {
  return `${greeting}, ${name}!`;
}

let message: string = greet("Alice");






// interface é usada para definir a estrutura de um objeto.
//  Pode ser estendida e implementada por classes.


interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

let person: Person[] = [
  {
  name: "Alice",
  age: 25,
  isStudent: true
},
{
  name: "paola",
  age: 25,
  isStudent: true
}];



// type é usado para criar alias para tipos existentes, incluindo tipos 
// primitivos, uniões, interseções, e tipos complexos.

// Definindo um Type básico:


type ID = number | Person | string;

let userId: ID;
userId = 123;  // OK
userId = "ABC";  // OK


// Tipos de União:

type SuccessResponse = {
  data: [];
};

type ErrorResponse = {
  error: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(status: number): ApiResponse {
  if (status === 200) {
    return {
      data: []
    };
  } else {
    return {
      error: 'deu erro!'
    };
  }
}

handleResponse(200);



// Interseções de Tipos:

type BasicInfo = {
  name: string;
  age: number;
};

type ContactInfo = {
  email: string;
  phone: string;
};

type UserInfo = BasicInfo & ContactInfo;

let user: UserInfo = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
  phone: "123-456-7890"
};









//ex3

exibirCarteira();

lancarEntradas(600);

lancarSaida(150);




//ex4

