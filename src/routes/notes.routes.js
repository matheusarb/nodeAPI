//inicializar o express nesse arquivo
const { Router } = require("express"); //importando Express
const NotesController = require("../controllers/NotesController"); //importando o Controller, onde há a BLL

const notesRoutes = Router(); //inicializando a função de rotear
const notesController = new NotesController(); //criando instância da classe

notesRoutes.post('/:user_id', notesController.create);

//exportar o usersRoutes ao server.js
module.exports = notesRoutes;