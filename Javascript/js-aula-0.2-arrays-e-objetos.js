//Arrays (Vetor ou Lista)
let produtos = ["Computador", "Notebook", "Celular", "Tablet"];

//mostrando o tipo da variável e exibindo o vetor em si
console.log(typeof produtos);
console.log(produtos);

//Exibindo elementos de um vetor pelo índice, sem loop
console.log(produtos[0]);
console.log(produtos[1]);
console.log(produtos[2]);
console.log(produtos[3]);

//Exibir elementos do vetor com o for (com índices)
for (let c in produtos) {
  //console.log(`${c} - ${produtos[c]}`)
  //Transformando o contador em variável number para somar + 1 e mostrar "1, 2, 3, 4" ao invés de "0, 1, 2, 3" = Casting
  console.log(`${Number(c) + 1} - ${produtos[c]}`);
}

//Exibindo os elementos do vetor com forEach (com índices)
produtos.forEach(function (produto, i) {
  console.log(i + 1, produto);
});

//Métodos de manipulação de vetores ////////////////////////////////////////////////////////////////////////////////////////////////////
let listaFrutas = ["Laranja", " Maçã", " Banana"];
console.log(`Nosso vetor é o: ${listaFrutas}`);

//adicionando item sem Push
listaFrutas[3] = " Morango";
console.log(`Nosso vetor é o: ${listaFrutas}`);

//Push - Insere um elemento no final da lista
listaFrutas.push(" Abacaxi");
console.log(`Nosso vetor é o: ${listaFrutas}`);

//unshift - Insere um elemento no início da lista
listaFrutas.unshift("Uva ");
console.log(`Nosso vetor é o: ${listaFrutas}`);

//Número de índices que tem num vetor - Length ////////////////////////////////////////////////////////////////////////////////////////
let numeros = [6, 8, 2, 9, 3];
console.log(`Nosso vetor é o: ${numeros}`);
console.log(`O número de elementos nesse vetor é: ${numeros.length}`);

//Sort - Ordena o vetor //////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(`Nosso vetor ordenado é o: ${numeros.sort()}`);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Objetos Literais (Atributos e métodos) - slide

//Objetos e array
const carro = {
  modelo: "gol",
  cor: "vermelho",

  acelerar() {
    return "Acelerando";
  },
  frear() {
    return "Freando";
  },
};

console.log(carro.modelo);
console.log(carro.acelerar());

//Objeto

const product = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC Moderno com bom desempenho",
};
console.log(
  `O ${product.nome} da marca ${product.marca}, custa apenas ${product.preco} reais. ${product.descricao}!`
);

//Array de objetos
const productList = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC Moderno com bom desempenho",
  },
  {
    nome: "tablet",
    marca: "intel",
    preco: 4000,
    descricao: "ótima velocidade de processamento",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 15000,
    descricao: "Top Tier",
  },
];
console.log(productList)


//exibindo array de objetos com foreach com função anonima
productList.forEach(function (product){
    console.log(`Produto: ${product.nome}`)
    console.log(`Produto: ${product.marca}`)
    console.log(`Produto: ${product.preco}`)
    console.log(`Produto: ${product.descricao}`)
    console.log()
});


//com arrow function
productList.forEach((product) => {
    console.log(`Produto: ${product.nome}`)
    console.log(`Produto: ${product.marca}`)
    console.log(`Produto: ${product.preco}`)
    console.log(`Produto: ${product.descricao}`)
    console.log()
});

