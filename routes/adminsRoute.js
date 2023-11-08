const express = require('express')
const adminRouter = express.Router()
const { adminCreate, adminRead, adminUpdate, adminDelete } = require('../Controllers/AdminsController');






adminRouter.post('/admin',adminCreate)
adminRouter.get('/admin',adminRead)
adminRouter.put('/admin/:id',adminUpdate)
adminRouter.delete('/admin/:id',adminDelete)






module.exports = adminRouter