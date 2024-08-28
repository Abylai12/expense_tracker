const sql = require("../config/db");

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM employees`;
  console.log("data:", data);
  res.status(200).json({ message: "success", objectData: data });
};
const createUser = () => {};
const updateUser = () => {};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM employees WHERE eid=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "delete", deletedEmployer: data });
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
