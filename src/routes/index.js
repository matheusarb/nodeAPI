const { Router } = require("express");

const usersRoutes = require("./users.routes");
const notesRoutes = require("./notes.routes");
const addressRoutes = require("./address.routes");
const tagsRoutes = require("./tags.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/notes", notesRoutes);
routes.use("/address", addressRoutes);
routes.use("/tags", tagsRoutes);

module.exports = routes;