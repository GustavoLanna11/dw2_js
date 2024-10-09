import express from "express";
//importando a tabela criada model
import Filme from "../Models/Filmes.js"
const router = express.Router();

router.get("/", (req, res)=>{
    Filme.findAll().then((filmes) =>{
        res.render("filmes", {
            filmes: filmes,
        });
    })
});

//rota de cadastro de filmes
router.post("/filmes/new", (req, res)=>{
    //puxando informações do forumlário
    const titulo = req.body.titulo;
    const genero = req.body.genero;
    const duracao = req.body.duracao;
    //cadastrando no banco
    Filme.create({
        titulo:titulo,
        genero:genero,
        duracao:duracao
    }).then(() => {
        res.redirect("/")
    }).catch(error => {
        console.log(error);
    })
});   

router.get("/filmes/delete/:id", (req, res)=>{
    const id = req.params.id
    Filme.destroy({
        where:{
            id:id
        }
    }).then(()=>{
        res.redirect("/")
    }).catch(error=>{
        console.log(error);
    })
})

export default router;