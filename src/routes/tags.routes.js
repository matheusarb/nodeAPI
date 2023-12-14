const { Router } = require("express");
const TagsController = require("../controllers/TagsController");
const tagsRoutes = new Router();
const tagsController = new TagsController();

tagsRoutes.get('/:id', tagsController.show);

module.exports = tagsRoutes;