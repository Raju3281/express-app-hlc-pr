const express = require('express')
const { savePromo, getAllPromoCodes } = require('../controllers/promoController')
const promoRoutes=express.Router()

promoRoutes.post("/savePromo",savePromo)
promoRoutes.get("/getAllPromoCodes",getAllPromoCodes)




module.exports={promoRoutes}