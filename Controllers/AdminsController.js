const mongoose = require("mongoose");
const Admin = require("../Modules/AdminsModule");

const adminCreate = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.create({ email, password });
    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const adminRead = async (req, res) => {
  try {
    const admin = await Admin.find({}, { password: 0 });
    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};




const adminUpdate = async (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    try {
      const admin = await Admin.findByIdAndUpdate(
        id,
        { email, password },
        { new: true }
      );
      res.status(200).json(admin);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  

  const adminDelete = async (req, res) => {
    const { id } = req.params;
    try {
       await Admin.findByIdAndDelete(
        id
      );
      res.status(200).json({message:"admin deleted succefully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    adminCreate,
    adminRead,
    adminUpdate,
    adminDelete
  };
  