const express = require("express"); //importando o express
const app = express(); //inicializando o express
const PORT = 3333;
const routes = require("./routes"); //por padrão ele carrega o arquivo da página com o nome "index". Por isso não precisamos declarar

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
app.use(express.json()); //determina o padrão a ser utilizado no corpo das requisições
app.use(routes);








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

