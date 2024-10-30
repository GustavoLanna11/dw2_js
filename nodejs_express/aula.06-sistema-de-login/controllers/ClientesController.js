import express from 'express'
const router = express.Router()
//importando o model de cliente
import Cliente from "../models/Cliente.js"
//importar o MiddleWare Auth
import Auth from "../middleware/Auth.js"


// ROTA CLIENTES
router.get("/clientes", Auth, function(req,res){
    Cliente.findAll().then(clientes => {
        res.render("clientes", {
            clientes: clientes,
        })
    })
})

//Rota de cadastro de clientes
router.post("/clientes/new", (req, res) => {
    //recebendo dados do formulário e gravando nas variáveis
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco;
    Cliente.create({
        nome:nome,
        cpf:cpf,
        endereco:endereco,
    }).then(() => {
        res.redirect("/clientes");
    })
})

//rota de exclusao de clientes
//essa rota recebe o parâmetro id
router.get("/clientes/delete/:id", (req, res) => {
    //coletar o id que veio da url
    const id = req.params.id
    //metodo para excluir
    Cliente.destroy({
        where:{
            id: id
        }
    }).then(() => {
        res.redirect("/clientes")
    }).catch(error => {
        console.log(error)
    })
});

router.get("/clientes/edit/:id", (req,res)=>{
    const id = req.params.id
    //memorize esse comando do sequelize
    Cliente.findByPk(id).then((cliente) => {
        res.render("clienteEdit", {
            cliente:cliente,
        });
    }).catch((error) => {
        console.log(error)
    })
});

router.post("/clientes/update", (req, res) => {
    const id = req.body.id
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    Cliente.update(
        {
            //esquerda = banco 
            //direita = formulario
            nome:nome,
            cpf:cpf,
            endereco:endereco
        },
        {where: {id:id}}
    ).then(()=>{
        res.redirect("/clientes")
    }).catch((error) => {
        console.log(error)
    })
});

export default router