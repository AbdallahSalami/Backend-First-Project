const mongoose =require('mongoose')


const groceriesSchema=new mongoose.Schema({
StoreID:{type:String, require:true, unique: true},
StoreName:{type:String},
OwnerName:{type:String},
PhoneNumber:{type :Number},
Location:{type :String},
City:{type:String},
Area:{type :String}, 
StoreImage:{type :String},

})


const Groceries= mongoose.model('Groceries',groceriesSchema)


module.exports =Groceries;