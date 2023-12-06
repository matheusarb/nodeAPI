const express = require("express");
const app = express();
const PORT = 3333;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

//ROUTE PARAMS
//são OBRIGATóRIOS no endereço da rota
//1º argumento: rota/endereço; 2º argumento: função
app.get(`/message/:id/:user`, (request, response) => {
    // destructuring
    const { id, user } = request.params;
    
    //recuperar info que tá sendo passada como 'route params':
    response.send(`
        Msg ID: ${id}\n
        Usuário: ${user}
    `);
});

//QUERY PARAMS
//São OPCIONAIS
app.get(`/users`, (request, response) => {
    const { pages, limit } = request.query;

    response.send(`Página: ${pages}. Mostrar: ${limit}`)
})