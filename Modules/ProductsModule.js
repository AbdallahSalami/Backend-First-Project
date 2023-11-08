const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String },
  price: { type: Number },
  image: { type: String },
  categoryID: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
  storeID: { type: mongoose.Schema.Types.ObjectId, ref: "groceriesStore" },
  newprice: { type: Number },
  itsnew: { type: Boolean, default: false },
});

productSchema.pre("find", function (next) {
  this.populate(["categoryID", "storeID"]);
  next();
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
