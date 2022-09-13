const router = require("express").Router();
const { createIncident, getIncident, getIncidents } = require("../controllers/incidents");

router
    .route("/")
    .get(getIncidents)
    .post(createIncident);

router
    .route("/:id")
    .get(getIncident)

module.exports = router;