const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { logger } = require("./middleware/logger");
dotenv.config();

const authRoutes = require("./routes/auth-route");
const userRoutes = require("./routes/user-route");
const categoryRoutes = require("./routes/category-route");
const recordRoutes = require("./routes/record-route");
const catRecRoutes = require("./routes/catRec-route");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/auth", authRoutes);
app.use("/customers", userRoutes);
app.use("/category", categoryRoutes);
app.use("/record", recordRoutes);
app.use("/stat", catRecRoutes);

app.listen(PORT, () => {
  console.log(`server ${PORT} deer aslaa`);
});
