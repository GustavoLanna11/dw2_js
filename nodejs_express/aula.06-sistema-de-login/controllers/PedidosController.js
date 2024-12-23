import express from 'express'
const router = express.Router()
//importando o model de cliente
import Pedido from "../models/Pedido.js"
import Auth from "../middleware/Auth.js"

// ROTA CLIENTES
router.get("/pedidos", Auth, function(req,res){
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
});

router.get("/pedidos/edit/:id", (req,res)=>{
    const id = req.params.id
    //memorize esse comando do sequelize
    Pedido.findByPk(id).then((pedido) => {
        res.render("pedidoEdit", {
            pedido:pedido,
        });
    }).catch((error) => {
        console.log(error)
    })
});

router.post("/pedidos/update", (req, res) => {
    const id = req.body.id
    const numero = req.body.numero
    const valor = req.body.valor
    Pedido.update(
        {
            //esquerda = banco 
            //direita = formulario
           numero:numero,
           valor:valor,
        },
        {where: {id:id}}
    ).then(()=>{
        res.redirect("/pedidos")
    }).catch((error) => {
        console.log(error)
    })
});

export default router