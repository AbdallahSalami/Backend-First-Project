const mongoose = require('mongoose')

const grocerySchema = new mongoose.Schema({
  storeName:{type:String},
  ownerName:{type:String},
  phoneNumber:{type :Number},
  location:{type :String},
  city:{type:String},
  area:{type :String}, 
  storeImage:{type :String},
})


const GroceryStore = mongoose.model('groceriesStore',grocerySchema)

module.exports = GroceryStore;