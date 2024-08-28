//Classe, data e moeda
////objeto literal

const carro = {
  //atributos
  marca: "ford",
  modelo: "Fiesta",
  ano: 2022,

  buzinar() {
    return "Beep Beep";
  },
};

console.log(carro.marca, carro.modelo);
console.log(carro.buzinar());

//classe
class Carro {
  //atributos
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //Métodos
  buzinar() {
    return "Beep! Beep!";
  }
}

//Criando uma instância (objeto) da classe carro
// const carroPopular = new Carro("Ford", "Fiesta", 2014)
const carroPopular = new Carro();
(carroPopular.marca = "Fiat"),
  (carroPopular.modelo = "Uno"),
  (carroPopular.ano = 1996);
console.log(
  carroPopular.marca,
  carroPopular.modelo,
  carroPopular.ano,
  carroPopular.buzinar()
);

const carroEsportivo = new Carro();
(carroEsportivo.marca = "Chevrolet"),
  (carroEsportivo.modelo = "Camaro"),
  (carroEsportivo.ano = 2024);
console.log(
  carroEsportivo.marca,
  carroEsportivo.modelo,
  carroEsportivo.ano,
  carroEsportivo.buzinar()
);










//Manipulando datas no js
//Criando instância para a classe date do javascript
//nao criamos o date, ele ja existe
const dataAtual = new Date();
//pegar o dia atual
const dia = dataAtual.getDate();
console.log(`hoje é dia ${dia}!`);
//pegar o mes atual
const mês = dataAtual.getMonth() + 1;
console.log(`Estamos no mês ${mês}`);
//pegar o ano
const ano = dataAtual.getFullYear();
console.log(`Estamos no ano ${ano}`);
console.log(`hoje é ${dia}/${mês}/${ano}`);

////////////////////////////////////////////////////////////

//Manipulação de moedas no javascript
//Dinamicamente tipado, mas, será tipado no tipo americano, com . não ,
let salario = 2500.3;
console.log(salario);
//toFixed define o número de casas decimais
console.log(salario.toFixed(2));
console.log(salario.toFixed(0));
// .replace (mudar ponto para virgula)
console.log(salario.toFixed(2).replace(".", ","));
//.toLocaleString - faz a formatação para determinada moeda
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "USD" })
);
console.log(
  salario.toLocaleString("eur", { style: "currency", currency: "EUR" })
);

//Convertendo real - dólar
let salarioDolar = salario * 0.18;
console.log(
  salarioDolar.toLocaleString("en", { style: "currency", currency: "USD" })
);

//Formatando String
const nome = "Gustavo Lanna"
//Letras Maiúsculas .toUpperCase()
console.log(nome.toUpperCase())
//Letras Minúsculas .toLowerCase()
console.log(nome.toLowerCase())
//contar letras .length
console.log(nome.length)
//.length (também pode ser usado para arrays)
const lista = ['Maçã', 'Banana', 'Morango']
console.log(lista.length)