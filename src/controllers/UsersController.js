class UsersController {
    create (request, response) {
        const { name, email, password } = request.body;
        response.status(201).json({ name, email, password }); //enviar a resposta em formato JSON
    }
}

module.exports = UsersController;