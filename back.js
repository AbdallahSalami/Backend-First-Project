const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const adminRouter = require("./routes/adminsRoute");
const offerRouter = require("./routes/offersRoute");
const categoryRouter = require("./routes/categoriesRoute");
const groceryRouter = require("./routes/groceriesStoreRoute");
const productRouter = require("./routes/productroutes");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use([
  adminRouter,
  offerRouter,
  categoryRouter,
  groceryRouter,
  productRouter,
]);

// app.use(express.static("upload"));

app.use("/upload", express.static("upload"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
