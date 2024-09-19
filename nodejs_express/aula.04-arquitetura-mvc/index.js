//Importando Express na aplicação
//const express = require("express"); //CommonJS Modules
import express from 'express' //ES6 Modules
const app = express(); //criando uma instância do Express

//importando os controllers
import ClientesController from"./controllers/ClientesController.js";

//definindo o EJS como renderizador de páginasnpm
app.set("view engine", "ejs");

//Definir a pasta dos arquivos estáticos
app.use(express.static('public'))

//Definindo o uso das rotas que estão nos controllers
app.use("/", ClientesController);

//Criando a rota principal
app.get("/", (req, res) => {
  //será renderizada a página index.ejs que está na pasta views
  res.render("index");
});

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
