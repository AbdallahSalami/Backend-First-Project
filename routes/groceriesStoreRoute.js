const express =require('express')
const groceryRouter = express.Router()
const {groceryCreate, groceryRead, groceryReadOne, groceryUpdate, groceryDelete}=require ('../Controllers/GroceriesStoreController')

const upload = require("../configuration/Multer");





groceryRouter.post('/grocery',upload.single("storeImage"),groceryCreate)
groceryRouter.get('/grocery',groceryRead)
groceryRouter.get('/grocery/:id',groceryReadOne)
groceryRouter.patch('/grocery/:id',upload.single("storeImage"),groceryUpdate)
groceryRouter.delete('/grocery/:id',groceryDelete)






module.exports = groceryRouter