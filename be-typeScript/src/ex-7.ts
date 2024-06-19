// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

// Definição dos tipos User e Diretoria
type User = {
  name: string;
  age: number;
  position: string;
};

type Diretoria = {
  name: string;
  age: number;
  comissionLevel: number;
  pay: number;
};

// Definição do tipo Funcionario que pode ser User ou Diretoria
type Funcionario = {
  funcionario: User | Diretoria;
};

// Array para armazenar os funcionários
const pessoas: Funcionario[] = [];

// Adicionando novos funcionários ao array
const novaPessoa: User = { name: "Daphne", age: 21, position: 'Coder' };
const novaPessoa2: Diretoria = { name: "Bernardo", age: 17, comissionLevel: 10, pay: 10000 };

pessoas.push({ funcionario: novaPessoa });
pessoas.push({ funcionario: novaPessoa2 });

// Função para imprimir informações dos funcionários
export function mostrarInformacoesFuncionarios(): void {
  
  pessoas.forEach(({ funcionario }) => {
    if ('comissionLevel' in funcionario) {
      // É um objeto do tipo Diretoria


      const diretor = funcionario as Diretoria; // Casting para Diretoria
      const salario = diretor.pay !== undefined ? `R$ ${diretor.pay}` : 'N/A';
      console.log(`Diretor(a) ${diretor.name}, ${diretor.age} anos, comissão nível ${diretor.comissionLevel}, salário: ${salario}`);
    } else {
      // É um objeto do tipo User
      const user = funcionario as User; // Casting para User
      console.log(`Funcionário(a): ${user.name}, ${user.age} anos, ${user.position}, salário: N/A`);
    }
    console.log("------");
  });
}




