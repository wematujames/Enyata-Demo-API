const router = require("express").Router();
const { createIncident, getIncident } = require("../controllers/incidents");

router
    .route("/")
    .post(createIncident);

router
    .route("/:id")
    .get(getIncident)

module.exports = router;