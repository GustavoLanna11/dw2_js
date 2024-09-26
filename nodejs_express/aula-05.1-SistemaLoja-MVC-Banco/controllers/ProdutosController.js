import express from 'express'
const router = express.Router()
//importando o model de cliente
import Produto from "../models/Produto.js"

// ROTA CLIENTES
router.get("/produtos", function(req,res){
    Produto.findAll().then(produtos => {
        res.render("produtos", {
            produtos: produtos,
        })
    })
})

//Rota de cadastro de clientes
router.post("/produtos/new", (req, res) => {
    //recebendo dados do formulário e gravando nas variáveis
    const nome = req.body.nome
    const preco = req.body.preco;
    const categoria = req.body.categoria;
    Produto.create({
       nome:nome,
       preco:preco,
       categoria:categoria
    }).then(() => {
        res.redirect("/produtos");
    })
})

//rota de exclusao de clientes
//essa rota recebe o parâmetro id
router.get("/produtos/delete/:id", (req, res) => {
    //coletar o id que veio da url
    const id = req.params.id
    //metodo para excluir
    Produto.destroy({
        where:{
            id: id
        }
    }).then(() => {
        res.redirect("/produtos")
    }).catch(error => {
        console.log(error)
    })
})

export default router