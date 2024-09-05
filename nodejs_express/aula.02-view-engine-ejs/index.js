//Criando servidor + página inicial

//Importando Express na aplicação
const express = require("express"); //CommonJS Modules
const app = express(); //criando uma instância do Express

//definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");






//Criando a rota principal
app.get("/", (req, res) => {
  //será renderizada a página index.ejs que está na pasta views
  res.render("index");
});

//rota de vídeos
app.get("/videos/:videos?", (req,res) =>{
  const listaVideos = ['Video1', 'Video2', 'Video3', 'Video4']
  const videos = req.params.videos
  res.render("videos", {videos:videos, listaVideos:listaVideos})
})

//rota de produtos, passando as variaveis para a pagina
app.get("/produtos/:produto?", (req,res) => {
  const listaProdutos = ['Computador', 'Celular', 'Tablet', 'Notebook']
  const produto = req.params.produto
  res.render("produtos", {produto:produto, listaProdutos:listaProdutos});

  //na paágina haverá uma testagem de condições
})

//rota de perfil
app.get("/perfil/:nome?", (req, res) => {
  const listaNomes = ['Gustavo', 'Ana', 'Yasmin', 'Isabely']
  const nome = req.params.nome
  res.render("perfil", {nome:nome, listaNomes:listaNomes});
})


//rota pedidos
app.get("/pedidos", (req,res) => {
  //array de objetos com os pedidos
  
  const pedidos = [
    {produto: "Celular", valor: 3000}, 
    {produto: "Computador", valor: 4000}, 
    {produto: "Tablet", valor: 2000}, 
    {produto: "Notebook", valor: 3800}]
  res.render("pedidos", {
    //enviando o array de objetos para a página
    pedidos: pedidos
  })
})

//Iniciando o servidor na porta 8080

const port = 8080
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor online em: http://localhost:${port}`);
  }
});

//node index.js (Inicia o projeto manualmente)
//http://localhost:8080 endereço do site

//npm install nodemon ------ Reinicia o servidor automaticamente!
//O npm é mais para instalar, já o npx é para executar pacotes.
//"start": "npx nodemon index.js" ou "npm start" comando dentro do package que serve para deixar o projeto rodando automaticamente.
