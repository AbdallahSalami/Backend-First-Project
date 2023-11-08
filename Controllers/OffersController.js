const mongoose = require("mongoose");
const Offer = require("../Modules/OffersModule");

const offerCreate = async (req, res) => {
  const { productID, description } = req.body;
  try {
    const offer = await Offer.create({ productID, description });
    res.status(200).json(offer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const offerRead = async (req, res) => {
  try {
    const offer = await Offer.find();
    res.status(200).json(offer);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};

const offerReadOne = async (req, res) => {
  const { id } = req.params;
  try {
    const offer = await Offer.findById({ id });
    res.status(200).json(offer);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};

const offerUpdate = async (req, res) => {
  const { id } = req.params;
  const { productID, description } = req.body;
  try {
    const offer = await Offer.findByIdAndUpdate(
      id,
      { productID, description },
      { new: true }
    );
    res.status(200).json(offer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const offerDelete = async (req, res) => {
  const { id } = req.params;
  try {
    await Offers.findByIdAndDelete(id);
    res.status(200).json({ message: "offers deleted succefully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  offerCreate,
  offerRead,
  offerReadOne,
  offerUpdate,
  offerDelete,
};
