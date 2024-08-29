const sql = require("../config/db");

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM customers`;
  console.log("data:", data);
  res.status(200).json({ message: "success", objectData: data });
};
const createUser = async (req, res) => {
  const { email, name, password, profile_img } = req.body;
  // const data =
  //   await sql`INSERT INTO customers (email, name, password, profile_img) VALUES(${email}, ${name}, ${password}, ${profile_img})`;
  const data =
    await sql`INSERT INTO customers (email, name, password, profile_img) VALUES('eweewew', 'saraa', 'pass', 'frfrfr' )`;
  console.log("data:", data);
  res.status(201).json({ data });
};
const updateUser = async (req, res) => {
  const { email, name, password, profile_img } = req.body;

  const data =
    await sql`UPDATE customers SET name = 'nomt', where id='ee33f9bb-5454-4b40-8fde-3c5c105c4e61'`;
  console.log("data:", data);
  res.status(201).json({ data });
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
