const router = require("express").Router();

router.route("*", (req, res) => {
    res.send({ msg: "Hello world" });
});

module.exports = router;

