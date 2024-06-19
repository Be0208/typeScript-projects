// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

type User = {
  name: string;
  idade: number;
  ocupacao: string;
  salario?: number;
}

export const userDaphne: User = {
  name: 'Daphne',
  idade: 23,
  ocupacao: 'analista de TI',
  salario: 1700
};

export const userBernardo: User = {
  name: 'Bernardo',
  idade: 17,
  ocupacao: 'analista de TI',
};

export function showUser(user: User): void {
  const salario = user.salario !== undefined ? `R$ ${user.salario}` : 'N/A';
  console.log(`${user.name}, ${user.idade} anos, ${user.ocupacao}, salário ${salario}`);
}
