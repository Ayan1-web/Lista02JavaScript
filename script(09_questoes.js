/* ---------------------------------------------------------
   Exercícios de estruturas de repetição em JavaScript
   Cada função retorna as linhas de saída como um array de
   strings, que são exibidas tanto no console.log quanto no
   bloco <pre> correspondente na página.
--------------------------------------------------------- */

// 1. Exibir os números de 1 a 10 usando FOR
function exercicio1() {
  const linhas = [];
  for (let i = 1; i <= 10; i++) {
    linhas.push(i);
  }
  return linhas;
}

// 2. Construir a tabuada de um número (1 a 10) usando FOR
function exercicio2() {
  const numero = 7; // número definido no código
  const linhas = [];
  for (let i = 1; i <= 10; i++) {
    linhas.push(`${numero} x ${i} = ${numero * i}`);
  }
  return linhas;
}

// 3. Somar os números de 1 a 100 usando WHILE
function exercicio3() {
  let soma = 0;
  let i = 1;
  while (i <= 100) {
    soma += i;
    i++;
  }
  return [`Soma dos números de 1 a 100 = ${soma}`];
}

// 4. Exibir os números pares de 0 a 20 usando WHILE
function exercicio4() {
  const linhas = [];
  let i = 0;
  while (i <= 20) {
    linhas.push(i);
    i += 2;
  }
  return linhas;
}

// 5. Contagem regressiva de 10 a 1 usando DO...WHILE
function exercicio5() {
  const linhas = [];
  let i = 10;
  do {
    linhas.push(i);
    i--;
  } while (i >= 1);
  return linhas;
}

// 6. Percorrer um objeto e exibir propriedades e valores usando FOR...IN
function exercicio6() {
  const usuario = {
    nome: "Ana Souza",
    idade: 22,
    curso: "Análise e Desenvolvimento de Sistemas",
    matricula: 20231045,
  };

  const linhas = [];
  for (const propriedade in usuario) {
    linhas.push(`${propriedade}: ${usuario[propriedade]}`);
  }
  return linhas;
}

// 7. Calcular a média das notas de um aluno armazenadas em um array
function exercicio7() {
  const notas = [7.5, 8.0, 6.5, 9.0, 7.0];
  let soma = 0;

  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  const media = soma / notas.length;

  return [
    `Notas: ${notas.join(", ")}`,
    `Soma: ${soma.toFixed(1)}`,
    `Média: ${media.toFixed(2)}`,
  ];
}

// 8. Exibir apenas os números ímpares de 1 a 50
function exercicio8() {
  const linhas = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      linhas.push(i);
    }
  }
  return linhas;
}

// 9. Simular um contador regressivo de 10 até 0
function exercicio9() {
  const linhas = [];
  let i = 10;
  while (i >= 0) {
    linhas.push(i === 0 ? "0 — Execução encerrada!" : i);
    i--;
  }
  return linhas;
}

/* ---------------------------------------------------------
   Motor de execução: liga cada botão "Executar" à função
   correspondente e imprime a saída no console visual.
--------------------------------------------------------- */

const exercicios = {
  output1: exercicio1,
  output2: exercicio2,
  output3: exercicio3,
  output4: exercicio4,
  output5: exercicio5,
  output6: exercicio6,
  output7: exercicio7,
  output8: exercicio8,
  output9: exercicio9,
};

function executarExercicio(targetId) {
  const funcao = exercicios[targetId];
  const outputEl = document.getElementById(targetId);
  if (!funcao || !outputEl) return;

  const linhas = funcao();

  // Exibe no console real do navegador (F12)
  console.log(`--- ${targetId} ---`);
  linhas.forEach((linha) => console.log(linha));

  // Exibe no console visual da página
  outputEl.textContent = linhas.map((linha) => `> ${linha}`).join("\n");
}

document.querySelectorAll(".run-btn").forEach((botao) => {
  botao.addEventListener("click", () => {
    executarExercicio(botao.dataset.target);
  });
});

document.getElementById("run-all").addEventListener("click", () => {
  Object.keys(exercicios).forEach((targetId) => executarExercicio(targetId));
});