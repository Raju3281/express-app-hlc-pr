const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
const { verifyToken } = require("../user-management/middleware/verifyToken");
const { itemRoutes } = require("./routes/itemRoutes");
const { connectToDatabase } = require("./config/dbConfig");

dotenv.config();
app.use(bodyParser.json());
app.use(verifyToken);
app.use('/api/item',itemRoutes)
connectToDatabase()
app.listen(process.env.ITEM_SERVICE_PORT, () =>
  console.log("listening on port " + process.env.ITEM_SERVICE_PORT)
);
