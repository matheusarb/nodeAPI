const knex = require("../database/knex");

class TagsController {
    async show(request, response) {
        const { id } = request.params;

        const userTags = await knex("tags").where({ user_id: id });

        return response.json(userTags);
    }
}

module.exports = TagsController;