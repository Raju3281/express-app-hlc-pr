const express = require('express')
const { savePromo } = require('../controllers/promoController')
const promoRoutes=express.Router()

promoRoutes.post("/savePromo",savePromo)





module.exports={promoRoutes}