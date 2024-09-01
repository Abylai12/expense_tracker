const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { logger } = require("./middleware/logger");
dotenv.config();

const userRoutes = require("./routes/user-route");
const categoryRoutes = require("./routes/category-route");
const recordRoutes = require("./routes/record-route");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/customers", userRoutes);
app.use("/category", categoryRoutes);
app.use("/record", recordRoutes);

app.listen(PORT, () => {
  console.log(`server ${PORT} deer aslaa`);
});
