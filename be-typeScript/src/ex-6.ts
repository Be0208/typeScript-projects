// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

type Diretor = {
  nome: string;
  idade: number;
  salario?: number;
  nivelComissionamento: number;
}

export const diretorDaphne: Diretor = {
  nome: 'Daphne',
  idade: 23,
  salario: 1000,
  nivelComissionamento: 5
};

export const diretorBernardo: Diretor = {
  nome: 'Bernardo',
  idade: 30,
  nivelComissionamento: 3
};

export function mostrarInformacoesDiretor(diretor: Diretor): void {
  const salario = diretor.salario !== undefined ? `R$ ${diretor.salario}` : 'N/A';
  console.log(`Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário ${salario}`);
}