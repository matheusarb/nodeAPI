const express = require("express");
const app = express();
const PORT = 3333;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

//1º argumento: rota/endereço; 2º argumento: função
app.get(`/message/:id`, (req, resp) => {
    resp.send(`Id da msg: ${req.params.id}`);
});