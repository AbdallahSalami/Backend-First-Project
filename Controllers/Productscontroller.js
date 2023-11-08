const mongooose = require("mongoose");
const Product = require("../Modules/ProductsModule");

const productCreate = async (req, res) => {
  const { productName, price, image, categoryID, storeID, newprice, itsnew } =
    req.body;
  try {
    const product = await Product.create({
      productName,
      price,
      image: `${req.protocol}://${req.get("host")}/${req.file.path}`,
      categoryID,
      storeID,
      newprice,
      itsnew,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ ...error });
  }
};

const productRead = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};

const productReadOne = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById({ id });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};

const productUpdate = async (req, res) => {
  const { id } = req.params;
  const { productName, price, image, categoryID, storeID, newprice, itsnew } =
    req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      {
        productID,
        productName,
        price,
        image: `${req.protocol}://${req.get("host")}/${req.file.path}`,
        categoryID,
        storeID,
        newprice,
        itsnew,
      },
      { new: true }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const productDelete = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "offers deleted succefully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  productCreate,
  productRead,
  productReadOne,
  productUpdate,
  productDelete,
};
