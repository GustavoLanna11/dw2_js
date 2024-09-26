import express from 'express'
const router = express.Router()
//importando o model de cliente
import Pedido from "../models/Pedido.js"

// ROTA CLIENTES
router.get("/pedidos", function(req,res){
    Pedido.findAll().then(pedidos => {
        res.render("pedidos", {
            pedidos: pedidos,
        })
    })
})

//Rota de cadastro de clientes
router.post("/pedidos/new", (req, res) => {
    //recebendo dados do formulário e gravando nas variáveis
    const numero = req.body.numero
    const valor = req.body.valor;
    Pedido.create({
        numero:numero,
        valor:valor,
    }).then(() => {
        res.redirect("/pedidos");
    })
})

//rota de exclusao de clientes
//essa rota recebe o parâmetro id
router.get("/pedidos/delete/:id", (req, res) => {
    //coletar o id que veio da url
    const id = req.params.id
    //metodo para excluir
    Pedido.destroy({
        where:{
            id: id
        }
    }).then(() => {
        res.redirect("/pedidos")
    }).catch(error => {
        console.log(error)
    })
})

export default router