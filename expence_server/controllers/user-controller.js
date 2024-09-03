const sql = require("../config/db");
const bcrypt = require("bcrypt");

const getAllCustomer = async (req, res) => {
  const hh = req.user;
  try {
    const data = await sql`SELECT * FROM customers WHERE id = ${hh}`;
    console.log("data:", data);
    res.status(200).json({ message: "success", objectData: data });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const createCustomer = async (req, res) => {
  const { email, name, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const data =
      await sql`INSERT INTO customers (email, name, password) VALUES(${email}, ${name}, ${hashedPassword})`;
    console.log("data:", data);
    res.status(201).json({ data });
  } catch (error) {
    res.status(401).json({ error });
  }
};
const updateCustomer = async (req, res) => {
  const values = req.body;
  const { id } = req.params;

  // let result = "";

  // for (const [key, value] of Object.entries(values)) {
  //   result += `${key}= '${value}',`;
  // }
  // result = result.trim().slice(0, -1);
  const columns = Object.keys(values);
  // const updateSql = conver(values);

  try {
    const data = await sql`
      UPDATE customers
      SET ${sql(values, columns)}
      WHERE id=${id}
    `;
    res.status(200).json({ message: "User updated successfully", data });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(400).json({ error: "Failed to update user" });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sql`DELETE FROM customers WHERE id=${id}`;
    console.log("DATA", data);
    res.status(200).json({ message: "delete", deletedUser: data });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// const conver = (values) => {
//   return Object.keys(values)
//     .map((k) => `${k}='${values[k]}'`)
//     .join(",");
// };

module.exports = {
  getAllCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
