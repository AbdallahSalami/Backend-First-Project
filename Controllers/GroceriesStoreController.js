const mongoose = require("mongoose");
const GroceryStore = require("../Modules/GroceriesStoreModule");

const groceryCreate = async (req, res) => {
  const { storeName, ownerName, phoneNumber, location, city, area,storeImage } = req.body;
  try {
    const groceries = await GroceryStore.create({
      storeName,
      ownerName,
      phoneNumber,
      location,
      city,
      area,
      storeImage: `${req.protocol}://${req.get("host")}/${req.file.path}`,
    });
    res.status(200).json(groceries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const groceryRead = async (req, res) => {
  try {
    const groceries = await GroceryStore.find();
    res.status(200).json(groceries);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};

const groceryReadOne = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await GroceryStore.findById({ id });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};

const groceryUpdate = async (req, res) => {
  const { id } = req.params;
  const {
    storeName,
    ownerName,
    phoneNumber,
    location,
    city,
    area,
    storeImage,
  } = req.body;
  try {
    const image = req.file.map((file) => file.filename);
    const groceries = await GroceryStore.findByIdAndUpdate(
      id,
      {
        storeName,
        ownerName,
        phoneNumber,
        location,
        city,
        area,
        storeImage: `${req.protocol}://${req.get("host")}/${req.file.path}`,
      },
      { new: true }
    );
    res.status(200).json(groceries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const groceryDelete = async (req, res) => {
  const { id } = req.params;
  try {
    await GroceryStore.findByIdAndDelete(id);
    res.status(200).json({ message: "Groceries deleted succefully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  groceryCreate,
  groceryRead,
  groceryReadOne,
  groceryUpdate,
  groceryDelete,
};
