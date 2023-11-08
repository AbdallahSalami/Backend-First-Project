const express = require('express')
const categoryRouter = express.Router()
const { categoryCreate, categoryRead, categoryReadOne, categoryUpdate, categoryDelete } = require('../Controllers/CategoriesController');





categoryRouter.post('/category',categoryCreate)
categoryRouter.get('/category',categoryRead)
categoryRouter.get('/category/:id',categoryReadOne)
categoryRouter.patch('/category/:id',categoryUpdate)
categoryRouter.delete('/category/:id',categoryDelete)





module.exports = categoryRouter