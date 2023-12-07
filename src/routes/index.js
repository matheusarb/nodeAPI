const { Router } = require("express");
const routes = Router();
const usersRoutes = require("./users.route");

routes.use("/users", usersRoutes);

module.exports = routes;