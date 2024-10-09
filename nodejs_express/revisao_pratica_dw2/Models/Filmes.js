import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Filme = connection.define("filmes", {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    genero:{
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    duracao:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})

//sincronizando e pedindo pra caso a tabela exista, não forçar uma nova
Filme.sync({force:false})
export default Filme;