const { hash, compare } = require("bcrypt");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersController {   
    async getUser(request, response) {
        const { id } = request.params;
        const database = await sqliteConnection();
        
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])

        return response.json({user});
    }
    
    create (request, response) {
        const { name, email, password } = request.body;

        if (!name) {
            throw new AppError("Nome é obrigatório");
        }

        response.status(201).json({ name, email, password, message: "Authorization VERIFIED. User created." }); //enviar a resposta em formato JSON
    }

    async create2(request, response) {
        const { name, email, password } = request.body;
        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if (checkUserExists) {
            throw new AppError("Esse e-mail já foi cadastrado");
        }

        const hashedPassword = await hash(password, 8);

        await database.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [ name, email, hashedPassword ]
        );

        return response.status(201).json({ "message": "Usuário cadastrado" });
    }

    async update(request, response) {
        const { name, email, password, old_password } = request.body;
        const { id } = request.params;
        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

        if (!user){
            throw new AppError("Usuário não encontrado.");
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);
        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Este e-mail já está em uso.");
        }      

        user.name = name ?? user.name;
        user.email = email ?? user.email;
        
        //Password exchange
        if(password && !old_password) {
            throw new AppError("Você precisa informar a senha atual para realizar a troca.");
        }
        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);
            if(!checkOldPassword) {
                throw new AppError("A senha atual está incorreta. Digite a senha novamente para prosseguir");
            }

            user.password = await hash(password, 8)
        }

        await database.run(`
                UPDATE users SET
                name = ?,
                email = ?,
                password = ?,
                updated_at = DATETIME('now')
                WHERE id = ?`,
                [user.name, user.email, user.password, id]
        );

        return response.json({ "message": "Usuário atualizado." });
    }
}

module.exports = UsersController;