/* Crie uma função anônima que receba duas notas como parâmetro. Se a média dessas notas for <=5, a função deve retornar o valor “Reprovado”, se não deve retornar o valor “Aprovado”.  O resultado deve ser exibido no console. Considere média = (nota1 + nota2) / 2.*/
const media = (nota1, nota2) => {
    return (nota1 + nota2)/2;
  };
  
  console.log(`O media do aluno é: ${media(5, 1)}`);

//Exercício 6 - Crie uma arrow function que receba um número como parâmetro e retorne o triplo desse número. O resultado deve ser exibido no console concatenado com uma string. (Ex: “O triplo do número é...”)
const triplo = (numero) => {
    return numero * 3;
  };
  console.log(`'O triplo do número é: ${triplo(30)}`);

//Exercício 7 - Crie uma arrow function que receba quatro números como parâmetro e retorne a soma entre esses números. O resultado deve ser impresso no console.
const soma = (n1, n2, n3, n4) => {
    return n1 + n2 + n3 + n4;
  };
  console.log(`O triplo do número é: ${soma(10, 10, 10, 10)}`);

//Exercício 8 - Crie uma função imediata que receba o nome de uma pessoa como parâmetro e exiba no console uma saudação a essa pessoa.
const saudar = (function (nome) {
    console.log(`Saudando imediatamente o nome ${nome}.`);
  })("Gustavo");