const { Router } = require("express");
const addressroute = Router();

addressroute.post("/", (request, response) => {
   const { street, number } = request.body;
   response.json({ street, number });
});

addressroute.post("/citystate", (request, response) => {
    const { city, state } = request.body;
    response.json({ city, state });
});

module.exports = addressroute;