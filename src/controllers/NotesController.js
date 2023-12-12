const knex = require("../database/knex");
// const { link } = require("../routes/notes.routes");

class NotesController {
    async showAllUserNotes(request, response) {
        const { user_id } = request.query;
        
        const userNotes = await knex("notes")
            .where({ user_id })
            .orderBy("title");        

        return response.json(userNotes);
    }
    
    async show(request, response) {
        const { id } = request.params;
        
        const note = await knex("notes").where({ id }).first();
        const tags = await knex("tags").where({ note_id: id }).orderBy("name");
        const links = await knex("links").where({ note_id: id }).orderBy("created_at");
        
        return response.json({
            ...note,
            tags,
            links
        });
    }
    
    async create(request, response) {
        const { title, descr, tags, links } = request.body;
        const { user_id } = request.params;

        const [note_id] = await knex("notes").insert({
            title,
            descr,
            user_id
        });

        const linksInsert = links.map(link => {
            return {
                note_id,
                url: link
            }
        });
        await knex("links").insert(linksInsert);

        const tagsInsert = tags.map(name => {
            return {
                note_id,
                name,
                user_id
            }
        });
        await knex("tags").insert(tagsInsert);

        response.json({ "message": "nota criada." });
    }

    async delete(request, response) {
        const { id } = request.params;
        await knex("notes").where({ user_id: id }).delete();       

        return response.json({ "message": "note deleted." });
    }
}

module.exports = NotesController;