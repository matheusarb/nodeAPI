//inicializar o express nesse arquivo
const { Router } = require("express"); //importando Express
const usersRoutes = Router(); //inicializando a função de rotear

const UsersController = require("../controllers/UsersController"); //importando o Controller, onde há a BLL
const usersController = new UsersController(); //criando instância da classe

//POST e INSOMNIA
usersRoutes.post('/', usersController.create);

//exportar o usersRoutes ao server.js
module.exports = usersRoutes;