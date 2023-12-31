const mongoose = require("mongoose");
const Category = require("../Modules/categoriesmodules");

const categorycreate = async (req, res) => {
  const { categoryName, storeID } = req.body;
  if (!mongoose.Types.ObjectId.isValid(storeID)) {
    return res.status(400).json({ error: "Invalid storeID" });
  }
  try {
    // const category = await Category.create({
    //   categoryName,
    //   storeID,
    // });
    const category = new Category({
      categoryName,
      storeID,
    });

    category
      .save()
      .then((cat) => res.status(200).json(cat))
      .catch((err) => res.status(500).json(err));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const categoryget = async (req, res) => {
  try {
    const categories = await Category.aggregate([
      {
        $lookup: {
          from: 'groceries',
          localField: 'storeID',
          foreignField: '_id',
          as: 'storeData'
        }
      },
      {
        $project: {
          categoryName: 1,
          storeName: { $arrayElemAt: ['$storeData.StoreName', 0] }
        }
      }
    ]);

    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const categorygetone = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};


const categoryupdate = async (req, res) => {
  const { id } = req.params;
  const { categoryName, storeID } = req.body;
  if (!mongoose.Types.ObjectId.isValid(storeID)) {
    return res.status(400).json({ error: "Invalid storeID" });
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

const categorydelete = async (req, res) => {
  const { id } = req.params;
  try {
    await Category.findByIdAndDelete(id);
    res.status(200).json({ message: "category deleted succefully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  categorycreate,
  categoryget,
  categorygetone,
  categoryupdate,
  categorydelete,
};
