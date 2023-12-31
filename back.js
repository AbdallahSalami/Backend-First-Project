const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const adminrouter = require("./routes/Admin");
const offersrouter = require("./routes/Offersroutes");
const categoryrouter = require("./routes/categoriesroutes");
const Groceryrouter = require("./routes/GroceriesStoreRoutes");
const Productsrouter = require("./routes/productroutes");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use cors middleware
app.use(
  cors({
    origin: "*", // Replace with your frontend's URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/upload", express.static("upload"));
app.use([
  adminrouter,
  offersrouter,
  categoryrouter,
  Groceryrouter,
  Productsrouter,
]);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
