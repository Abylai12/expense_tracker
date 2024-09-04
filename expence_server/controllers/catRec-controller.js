const sql = require("../config/db");
const bcrypt = require("bcrypt");

const getCatRecData = async (req, res) => {
  const { id } = req.user;
  console.log("token", id);

  try {
    const [customer] =
      await sql`SELECT id, name , email, profile_img FROM customers WHERE id = ${id} `;
    const [customr] =
      await sql`SELECT id, name , email, profile_img FROM customers WHERE id = ${id} `;

    res.status(200).json({ customer, customr });
  } catch (error) {
    res.status(400).json({ error });
  }
};
module.exports = { getCatRecData };
