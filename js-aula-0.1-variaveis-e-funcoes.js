/*Variáveis podem receber números ou caracteres
 - Para definir variáveis, use "var", "let" ou "const";

 * Var (está sendo deixado de lado no js) -> pode ter o valor reatribuído, e pode ser redeclarado. Na dúvida não use!
 * 
 * Let -> Pode ter o valor reatribuído e NÃO pode ser redeclarado. Valor de variável que pode mudar, por exemplo salário.
 * 
 * Const -> NÃO pode ser reatribuído e NÃO pode ser redeclarado. Variável constante, não muda

*/

//Declaração de variáveis, const X let X var;
//No const é necessário declarar o valor junto, já o var e let não;
//F8 para executar o código com o node.exec;

const nome = "Gustavo";

var idade;
var idade = 20;
idade = 18;

let cidade;
cidade = "Jacupiranga";

//imprime um valor no terminal
console.log("Seu nome é: " + nome);
console.log("Sua idade é: " + idade);
console.log("Sua cidade é: " + cidade);

/////////////////////////////////////////////////////////////////////////////////////

//TYPEOFF = Mostra o tipo da variável, afinal o JS é dinamicamente tipado, ele IDENTIFICA o tipo da sua variável.
const sobrenome = "Lanna";
const salario = 700;
let endereco;

console.log(typeof sobrenome);
console.log(typeof salario);
console.log(typeof endereco);

////////////////////////////////////////////////////////////////////////////////////
//Função, conjunto de códigos que serão executados quando solicitados
//Tipos de funções

//função simples
function minhaFuncao() {
  console.log("Olá, mundo!");
}

minhaFuncao();

//função com parametro ou argumento, atribuindo valor dentro da função, ele se torna opcional
//cidade = obrigatório, e nome = opcional.
//recebendo na função = parâmetro
function saudacao(cidade, nome = "usuário") {
  console.log("Olá, bem-vindo, " + nome + " de " + cidade);
}
//puxando o valor da função, que, senão declarada (vazia) irá executar o valor predefinido lá no topo.
saudacao("Registro"); //enviando informação = argumento

function soma(n1, n2) {
  let resultado = n1 + n2;
  //concatenando com Literal/template strings ${} : placeholder
  console.log(`A soma dos dois números é: ${resultado}`);
}
soma(14, 10);

//////////////////////////////////////////////////////////////////////////////////////

//Função com retorno, utiliza o return
function Soma(n1, n2) {
  return n1 + n2;
}

console.log(`A soma dos dois número foi ${Soma(2, 6)}.`);
//Global ou escopo, no topo, declaramos no GLOBAL, já na função é no escopo, por isso os dados da variável só existem dentro da função.
//Lembre-se de tratar as mensagens de interação com o usuário fora das funções;

//////////////////////////////////////////////////////////////////////////////////////
function parImpar(numero) {
  if (numero % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

let numero = 4;
console.log(`O número enviado é ${parImpar(numero)}`);

////////////////////////////////////////////////////////
//O que é node.js? Interpretador de códigos.

//Função anônima deve ser colocada dentro de uma variável para funcionar

//Criando função anônima
const dobro = function (x) {
  return x * 2;
};
//atribuindo valor a variável que será usada na função anônima
console.log(`O dobro do número é: ${dobro(15)}`);

////////////////////////////////////////////////////
//Arrow Function (tipo de função anônima) - Parâmetro único
//Prettier foi usado para deixar o código mais "bonito", permitindo que o usuário code sem se preocupar com pontuação. Shift+alt+f Além disso o uso de pontuação no js é opcional.
const Dobro = (x) => {
  return x * 2;
};
console.log(`O dobro do número é: ${Dobro(30)}`);
//////////////////////////////////////////////////

//arrow function com mais de um parâmetro, ESSA É A FUNÇÃO QUE MAIS SERÁ UTILIZADA!!!!!
const calculadora = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
//eval realiza contas a partir de operadores, como mostrado acima
console.log(`o resultado da operação é: ${calculadora(6, "*", 2)}`);

/////////////////////////////////////////////////

//Função imediata - IIFE (Immediately Invoked Function Expression) - basicamente é chamada na hora, sendo desnecessário puxar ela manualmente.
const iife = (function () {
  console.log("Executando imediatamente!");
})();

//função imediata com parâmetro
const start = (function (app) {
  console.log(`Executando imediatamente o app ${app}.`);
})("Whatsapp");
