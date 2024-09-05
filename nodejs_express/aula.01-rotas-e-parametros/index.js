//Criando servidor + página inicial

//Importando Express na aplicação
const express = require("express"); //CommonJS Modules
const app = express(); //criando uma instância do Express

//Criando a rota principal
app.get("/", (req, res) => {
  res.send("<br> <center><h1> Bem Vindo! </h1></center> <br> <hr>");
});

//rota Perfil com parâmetro nome
// :nome parâmetro obrigatório
// :nome? parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
  //coletando o nome, guardando na variável e adicionando a resposta
  const nome = req.params.nome;
  //verificando se o parametro nome existe
  if (nome) {
    //se nome = true
    res.send(`Seja bem-vindo! <h1>${nome}</h1>`);
  } else {
    res.send(`<h2>Faça login para acessar seu perfil</h2>`);
  }
});

//rota de vídeos
app.get("/videos:playlist?/video:?", (req, res) => {
  const playlist = req.params.playlist
  const video = req.params.playlist

  //verificando se playlist = true e video = undefined
  if(playlist && video == undefined){
    res.send(`<h2>Você está na playlist de ${playlist}</h2>`)
  }

  //verificando se os dois são true
  if(playlist && video){
    res.send(`<h2>Você está na playlist de ${playlist} reproduzindo o vídeo ${video}`)
  }

  //se nenhum parâmetro for informado
  else {
    res.send("<h1>Página de Vídeos</h1>");
  }

});

//Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor online!");
  }
});

//node index.js (Inicia o projeto manualmente)
//http://localhost:8080 endereço do site

//npm install nodemon ------ Reinicia o servidor automaticamente!
//O npm é mais para instalar, já o npx é para executar pacotes.
//"start": "npx nodemon index.js" ou "npm start" comando dentro do package que serve para deixar o projeto rodando automaticamente.
