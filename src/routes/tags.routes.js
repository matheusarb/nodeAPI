const { Router } = require("express");
const TagsController = require("../controllers/TagsController");
const tagsRoutes = new Router();
const tagsController = new TagsController();

tagsRoutes.get('/:user_id', tagsController.show);

module.exports = tagsRoutes;