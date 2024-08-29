//Criando servidor + página inicial

//Importando Express na aplicação
const express = require("express"); //CommonJS Modules
const app = express(); //criando uma instância do Express

//Criando a rota principal
app.get("/", function(req, res) {
    res.send("Hello world! Avanti Palestra!")
})

//Iniciando o servidor na porta 8080
app.listen(8080, function (error) {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor online!");
  }
});

//node index.js (Inicia o projeto manualmente)
//http://localhost:8080 endereço do site