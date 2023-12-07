const { Router } = require("express");
const routes = Router();

const usersRoutes = require("./users.routes");
const addressroutes = require("./address.routes");

routes.use("/users", usersRoutes);
routes.use("/address", addressroutes);

module.exports = routes;