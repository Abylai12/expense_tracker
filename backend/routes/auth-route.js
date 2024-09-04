const { Router } = require("express");
const { signin, signup } = require("../controllers/auth-controller");

const router = Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
// router.post("/signin", auth, signin);

module.exports = router;
