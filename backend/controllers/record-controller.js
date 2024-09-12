const sql = require("../config/db");

const getCurrentCustomer = async (req, res) => {
  const { id } = req.user;
  try {
    const newestRecords =
      await sql`SELECT r.name, r.transaction_type, r.amount, date_part('day', r.created_at) d
FROM records r
INNER JOIN customers c ON r.customer_id = c.id
WHERE c.id = ${id} `;
    res.status(200).json({ newestRecords });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const createRecord = async (req, res) => {
  const user = req.body;
  const columns = Object.keys(user);
  try {
    const data = await sql`INSERT INTO records ${sql(user, columns)}`;

    res.status(201).json({ message: "User created successfully", data });
  } catch (error) {
    res.status(401).json({ error });
  }
};
const updateRecord = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const columns = Object.keys(user);
  try {
    const data = await sql` UPDATE records SET ${sql(
      user,
      columns
    )} WHERE id = ${id}`;
    res.status(200).json({ message: "User updated succesfully", data });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(400).json({ error: "failed to update user" });
  }
};
const deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sql`DELETE FROM records WHERE id = ${id}`;
    res.status(200).json({ message: "delete", deletedUser: data });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = {
  getCurrentCustomer,
  createRecord,
  updateRecord,
  deleteRecord,
};
