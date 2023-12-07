//inicializar o express nesse arquivo
const { Router } = require("express"); //importando Express
const usersRoutes = Router(); //inicializando a função de rotear

const UsersController = require("../controllers/UsersController"); //importando o Controller, onde há a BLL
const usersController = new UsersController(); //criando instância da classe

function myMiddleware(request, response, next) {
    console.log("Você passou pelo middleware!");
    if (!request.body.isAdmin ||  request.body.isAdmin == null) {
        return response.json({ message: "User unauthorized." })
    }
    response.json({ message: "Authorization complete. User created." })
    
    next();
}


//POST e INSOMNIA
usersRoutes.post('/', myMiddleware, usersController.create);

//exportar o usersRoutes ao server.js
module.exports = usersRoutes;