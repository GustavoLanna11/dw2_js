
/*1 – Crie um vetor contendo os nomes de todos os estados brasileiros. Em seguida, exiba esse 
vetor na tela através de uma estrutura forEach. Os índices do vetor também devem ser exibidos.*/
let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo',
     'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 
     'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 
     'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 
     'Tocantins', '+ o Distrito Federal']

estados.forEach(function (estado, i) {
    console.log(i + 1, estado);
  });

  /* 2 – Crie um objeto literal para descrever você. Esse objeto deve ter no mínimo 5 chaves, 
  por exemplo, nome, idade, cidade, hobby, música preferida. Em seguida, exiba as chaves e 
  valores na tela.*/
const eu = {
    nome: 'Gustavo',
    idade: '18',
    cidade: 'Jacupiranga',
    hobby: 'Jogar',
    musica: 'Capítulo 4, Versículo 3',

    acordar(){
        return "Acordando...";
    },
    dormir(){
        return "Dormindo..."
    }
};
  console.log(eu.nome);
  console.log(eu.idade);
  console.log(eu.cidade);
  console.log(eu.hobby);
  console.log(eu.musica);
  console.log(eu.acordar());

  /* 3 – Crie um array de objetos de filmes com no mínimo 3 filmes. Cada filme deve possuir no
   mínimo 4 chaves, por exemplo, título, gênero, ano e classificação de idade. Em seguida, 
   exiba o array de objetos através de uma estrutura forEach.*/

   const filmes = [
    {
      titulo: "Homem aranha - longe de casa",
      genero: "Ficção",
      ano: 2022,
      classificacao: "14+",
    },
    {
        titulo: "Kingsman - Serviço Secreto",
        genero: "Ficção",
        ano: 2016,
        classificacao: "16+",
    },
    {
        titulo: "Deadpool X Wolverine",
        genero: "Ficção",
        ano: 2024,
        classificacao: "18+",
    },
  ];
  
  //com arrow function
  filmes.forEach((itens) => {
      console.log(`Título: ${itens.titulo}`)
      console.log(`Gênero: ${itens.genero}`)
      console.log(`Ano: ${itens.ano}`)
      console.log(`Classificação: ${itens.classificacao}`)
      console.log()
  });