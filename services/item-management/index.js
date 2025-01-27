const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
const { verifyToken } = require("../user-management/middleware/verifyToken");
const { itemRoutes } = require("./routes/itemRoutes");
const { connectToDatabase } = require("./config/dbConfig");
const { promoRoutes } = require("./routes/promoRoutes");

dotenv.config();

app.use(bodyParser.json());

app.use(verifyToken);

app.use("/api/item",itemRoutes)
app.use("/api/promo",promoRoutes)
connectToDatabase()

app.listen(process.env.ITEM_SERVICE_PORT, () =>
  console.log("listening on port " + process.env.ITEM_SERVICE_PORT)
);
