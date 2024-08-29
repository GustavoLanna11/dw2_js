//Criando servidor + página inicial

//Importando Express na aplicação
const express = require("express"); //CommonJS Modules
const app = express(); //criando uma instância do Express

//Criando a rota principal
app.get("/", (req, res) => {
    res.send("<br> <center><h1> Bem Vindo! </h1></center> <br> <hr>")
})

//rota Perfil com parâmetro nome
// :nome parâmetro obrigatório
app.get("/perfil/:nome", (req, res)=>{
  //coletando o nome, guardando na variável e adicionando a resposta
  const nome = req.params.nome
  res.send(`Seja bem-vindo! <h1>${nome}</h1>`)
})

//rota de vídeos
app.get("/videos", (req, res)=>{
  res.send("<h1>Página de Vídeos</h1>")
})

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