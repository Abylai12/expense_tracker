const { Router } = require("express");
const { auth } = require("../middleware/auth");
const {
  getCurrentCustomer,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/record-controller");

const router = Router();

router.route("/stat").get(auth, getCurrentCustomer).post(auth, createRecord);

router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
