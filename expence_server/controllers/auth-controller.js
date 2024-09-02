const sql = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [user] = await sql`SELECT * FROM customers WHERE email=${email}`;

    if (!user) {
      res.status(404).json({ message: "Not found user" });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password);
      if (!isCheck) {
        res.status(400).json({ message: "Not match user email or password" });
      } else {
        const token = jwt.sign({ id: user.id }, "JWTPASS", {
          expiresIn: "1h",
        });
        res.status(200).json({ message: "success", token });
      }
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
const signup = async (req, res) => {
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

module.exports = {
  signup,
  signin,
};
