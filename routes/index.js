const router = require("express").Router();
// const { } = require("../controllers/");

router.get("/", (req, res) => {
    res.send({ msg: "Hello world" });
});

module.exports = router;