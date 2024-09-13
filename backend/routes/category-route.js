const { Router } = require("express");
const { auth } = require("../middleware/auth");
const {
  getCustomerCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category-controller");

const router = Router();

router
  .route("/customer")
  .get(auth, getCustomerCategory)
  .post(auth, createCategory);

router.route("/:id").put(updateCategory).delete(deleteCategory);

module.exports = router;
