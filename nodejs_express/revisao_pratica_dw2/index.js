import express from "express";
const app = express();

//criando servidor e definindo porta
const port = 8080
app.listen(port, (error) => {
    //caso dê erro, mostre-o
    if(error){
        console.log(`Erro ao inidicar o servidor: ${error}`)
    }
    //mostrando onde o servidor está rodando
    else{
       console.log(`Servidor rodando em http://localhost:${port}`) ;
    }
});


//definindo o view engine (ejs), arquivos estáticos(css e imagens) e urlcoded (dados de formulário)
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

//importando a rota do controllers
import FilmesController from "./Controllers/FilmesController.js"
//usando a rota importada
app.use("/", FilmesController);

//importando o connection do sequelize-config
import connection from "./config/sequelize-config.js";

//conectando ao banco com o método authenticate
connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
}).catch(error => {
    console.log(error);
})

//connection .query() para criar o banco.
connection.query(`CREATE DATABASE IF NOT EXISTS filmes;`).then(()=>{
    console.log("O banco de dados está criado!");
}).catch(error => {
    console.log(error)
});