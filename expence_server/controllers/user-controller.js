const sql = require("../config/db");

const getAllUser = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM customers`;
    console.log("data:", data);
    res.status(200).json({ message: "success", objectData: data });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const createUser = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const data =
      await sql`INSERT INTO customers (email, name, password) VALUES(${email}, ${name}, ${password})`;
    console.log("data:", data);
    res.status(201).json({ data });
  } catch (error) {
    res.status(401).json({ error });
  }
};
const updateUser = async (req, res) => {
  const { email, name, password, profile_img } = req.body;
  console.log(req.body);
  // Build the SQL update fields dynamically
  const updates = [];
  if (name) updates.push(sql`name = ${name}`);
  if (email) updates.push(sql`email = ${email}`);
  if (password) updates.push(sql`password = ${password}`);
  if (profile_img) updates.push(sql`profile_img = ${profile_img}`);

  if (updates.length === 0) {
    return res
      .status(400)
      .json({ error: "No valid fields provided for update" });
  }

  try {
    const data = await sql`
      UPDATE customers 
      SET ${sql.join(updates, sql`, `)} 
      WHERE id =7d2e4e3c-6db1-4d8c-85ca-96fc23d0182f`;

    console.log("data:", data);
    res.status(200).json({ message: "User updated successfully", data });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(400).json({ error: "Failed to update user" });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sql`DELETE FROM customers WHERE id=${id}`;
    console.log("DATA", data);
    res.status(200).json({ message: "delete", deletedEmployer: data });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
