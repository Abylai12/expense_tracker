const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM categories`;
    console.log("data:", data);
    res.status(200).json({ message: "success", objectData: data });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const createCategory = async (req, res) => {
  const user = req.body;
  const columns = Object.keys(user);
  try {
    const data = await sql`INSERT INTO categories ${sql(user, columns)}`;

    res.status(201).json({ message: "User created successfully", data });
  } catch (error) {
    res.status(401).json({ error });
  }
};
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
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
