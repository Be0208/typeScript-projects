// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

type NotaPonderada = {
  nota: number;
  peso: number;
};

export function calcularMediaPonderada(notas: NotaPonderada[]): number {
  let somaProdutos = 0;
  let somaPesos = 0;

  notas.forEach(item => {
    somaProdutos += item.nota * item.peso;
    somaPesos += item.peso;
  });

  if (somaPesos === 0) {
    throw new Error('A lista de notas não pode ter pesos iguais a zero.');
  }

  return somaProdutos / somaPesos;
}