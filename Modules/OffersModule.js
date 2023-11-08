const mongoose = require("mongoose");
const offerSchema = new mongoose.Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

offerSchema.pre("find", function (next) {
  this.populate("productID");
  next();
});

const Offer = mongoose.model("offers", offerSchema);

module.exports = Offer;
