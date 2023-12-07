const express = require("express");
const app = express();
const PORT = 3333;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
app.use(express.json()); //determina o padrão a ser utilizado no corpo das requisições

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

    // o padrão utilizado para devolver como resposta é em JSON
    response.json({ pages, limit });
    // response.send(`Page: ${pages}. ShowLimit: ${limit}`)
})

//POST e INSOMNIA
app.post('/user', (request, response) => {
    const { name, email, password } = request.body;
    
    response.json({ name, email, password }); //enviar a resposta em formato JSON
    // response.send(`User: ${name} // Email: ${email} // Password: ${password}`); //envia a resposta num formato meio que html
}) 