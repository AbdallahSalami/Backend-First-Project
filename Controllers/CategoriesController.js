const mongoose = require("mongoose");
const Category = require("../Modules/CategoriesModule");



const categoryCreate = async (req, res) => {
  const {  categoryName, storeID } = req.body;
  if (!mongoose.Types.ObjectId.isValid(storeID)) {
    return res.status(400).json({ error: 'Invalid storeID' });
  }
  try {
    const category = await Category.create({
      categoryName,
      stostoreIDreID,
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const categoryRead = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};


const categoryReadOne = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById({ id });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};


const categoryUpdate = async (req, res) => {
  const { id } = req.params;
  const { categoryName, storeID } = req.body;
  if (!mongoose.Types.ObjectId.isValid(storeID)) {
    return res.status(400).json({ error: 'Invalid storeID' });
  }
  try {
    const category = await Category.findByIdAndUpdate(
      id,
      { categoryName, storeID },
      { new: true }
    );
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const categoryDelete = async (req, res) => {
  const { id } = req.params;
  try {
    await Category.findByIdAndDelete(id);
    res.status(200).json({ message: "offers deleted succefully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  categoryCreate,
  categoryRead,
  categoryReadOne,
  categoryUpdate,
  categoryDelete,
};
