const { Router } = require("express");
const { auth } = require("../middleware/auth");
const {
  getAllCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/user-controller");

const router = Router();

router.route("/").get(auth, getAllCustomer).post(createCustomer);

router.route("/:id").put(updateCustomer).delete(deleteCustomer);

module.exports = router;
