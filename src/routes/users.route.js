//inicializar o express nesse arquivo
const { Router } = require("express"); //importando Express
const usersRoutes = Router(); //inicializando a função de rotear

//POST e INSOMNIA
usersRoutes.post('/', (request, response) => {
    const { name, email, password } = request.body;
    response.json({ name, email, password }); //enviar a resposta em formato JSON
    // response.send(`User: ${name} // Email: ${email} // Password: ${password}`);
})

//exportar o usersRoutes ao server.js
module.exports = usersRoutes;