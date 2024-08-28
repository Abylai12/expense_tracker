const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { logger } = require("./middleware/logger");
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.get("/user", (req, res) => {
  console.log("all user is read successfully");
  res.json({ message: "success" });
});
app.post("/user", (req, res) => {
  console.log("New user is created successfully");
});
app.put("/user", (req, res) => {
  console.log("user is updated successfully");
});
app.delete("/user", (req, res) => {
  console.log("user is deleted successfully");
});

app.get("/category", (req, res) => {
  console.log("all category is read successfully");
});
app.post("/category", (req, res) => {
  console.log("New category is created successfully");
});
app.put("/category", (req, res) => {
  console.log("category is updated successfully");
});
app.delete("/category", (req, res) => {
  console.log("category is deleted successfully");
});

app.listen(PORT, () => {
  console.log(`server ${PORT} deer aslaa`);
});
