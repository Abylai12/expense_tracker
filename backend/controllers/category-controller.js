const sql = require("../config/db");

const getCustomerCategory = async (req, res) => {
  try {
    const categories =
      await sql`SELECT name, id, cat_color, category_image FROM categories`;

    res.status(200).json({ categories });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const createCategory = async (req, res) => {
  const { id } = req.user;
  const { catName, iconName, color } = req.body;
  try {
    const data =
      await sql`INSERT INTO categories(name,category_image, cat_color) VALUES(
${catName},
${iconName}, ${color}
)`;

    res.status(201).json({ message: "User created successfully", data });
  } catch (error) {
    res.status(401).json({ error });
  }
};
// SELECT  cat.name as cat_name, cat.id
// FROM records r
// INNER JOIN customers c ON r.customer_id=c.id
// INNER JOIN categories cat ON cat.id=r.category_id
// WHERE c.id=${id}
// GROUP BY cat_name, cat.id
const updateCategory = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const columns = Object.keys(user);
  try {
    const data = await sql` UPDATE categories SET ${sql(
      user,
      columns
    )} WHERE id = ${id}`;
    res.status(200).json({ message: "User updated succesfully", data });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(400).json({ error: "failed to update user" });
  }
};
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sql`DELETE FROM categories WHERE id = ${id}`;
    res.status(200).json({ message: "delete", deletedUser: data });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = {
  getCustomerCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
