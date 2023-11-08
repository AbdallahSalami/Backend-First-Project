const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    storeID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "groceriesStore",
    },
  },
  { timestamps: true }
);

categorySchema.pre("find", function (next) {
  this.populate("storeID");
  next();
});

const Category = mongoose.model("categories", categorySchema);

module.exports = Category;
