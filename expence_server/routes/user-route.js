const { Router } = require("express");
const {
  getAllCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/user-controller");

const router = Router();

router.route("/").get(getAllCustomer).post(createCustomer);

router.route("/:id").put(updateCustomer).delete(deleteCustomer);

module.exports = router;
