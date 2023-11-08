const express = require('express')
const offerRouter = express.Router()
const { offerCreate, offerRead,offerReadOne, offerUpdate, offerDelete } = require('../Controllers/OffersController');






offerRouter.post('/offer',offerCreate)
offerRouter.get('/offer',offerRead)
offerRouter.get('/offer/:id',offerReadOne)
offerRouter.patch('/offer/:id',offerUpdate)
offerRouter.delete('/offer/:id',offerDelete)






module.exports = offerRouter