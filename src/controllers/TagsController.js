const knex = require("../database/knex");

class TagsController {
    async show(request, response) {
        const { id } = request.params;

        const userTags = await knex("tags").where({ user_id: id });
        const tagsProps = userTags.map(tag => {
            return {
                name: tag.name,
                note_id: tag.note_id
            }
        })

        return response.json(tagsProps);
    }
}

module.exports = TagsController;