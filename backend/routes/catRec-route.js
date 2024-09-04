const { Router } = require("express");
const { auth } = require("../middleware/auth");
const { getCatRecData } = require("../controllers/catRec-controller");

const router = Router();

router.route("/").get(auth, getCatRecData);

module.exports = router;
