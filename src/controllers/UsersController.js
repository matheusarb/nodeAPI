const AppError = require("../utils/AppError");

class UsersController {
    create (request, response) {
        const { name, email, password } = request.body;

        if (!name) {
            throw new AppError("Nome é obrigatório");
        }

        response.status(201).json({ name, email, password, message: "Authorization VERIFIED. User created." }); //enviar a resposta em formato JSON
    }
}

module.exports = UsersController;