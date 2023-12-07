const { Router } = require("express");
const routes = Router();

const usersRoutes = require("./users.route");
const addressroutes = require("./address.route");

routes.use("/users", usersRoutes);
routes.use("/address", addressroutes);

module.exports = routes;