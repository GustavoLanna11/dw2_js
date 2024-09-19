import express from 'express' // Estamos usando a forma do ES6 Modules
//não iremos usar o express inteiro, e sim, só o métdodo router
const  router = express.Router()

//Rota de clientes com arrow function para tratar requisição e resposta
router.get("/clientes", (req,res) => {
    //array de objetos para clientes
    const clientes = [
        {nome: 'Gustavo', cpf: '123.456.789-00', endereco: 'Rua das Flores, 123 - Bairro Jardim Primavera - Felicidade - SP'},
        {nome: 'Gustavo', cpf: '123.456.789-00', endereco: 'Rua das Flores, 123 - Bairro Jardim Primavera - Felicidade - SP'},
        {nome: 'Gustavo', cpf: '123.456.789-00', endereco: 'Rua das Flores, 123 - Bairro Jardim Primavera - Felicidade - SP'},
        {nome: 'Gustavo', cpf: '123.456.789-00', endereco: 'Rua das Flores, 123 - Bairro Jardim Primavera - Felicidade - SP'}
    ]

    res.render("clientes", {
        clientes : clientes
    })
})

//exportando a rota de clientes para poder usar no index
export default router
