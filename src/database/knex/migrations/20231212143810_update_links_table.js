exports.up = knex => knex.schema.table("links", table => {
    table.renameColumn("link_id", "note_id");
});

exports.down = function(knex) {
    return knex.schema.table("links", function(table) {
        return table.renameColumn("note_id", "link_id");
    });
};
