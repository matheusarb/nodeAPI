const { Router } = require("express");

const usersRoutes = require("./users.routes");
const addressroutes = require("./address.routes");

const routes = Router();
routes.use("/users", usersRoutes);
routes.use("/address", addressroutes);

module.exports = routes;