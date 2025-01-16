const express = require('express');
const { createItem } = require('../controllers/itemControllers');
const itemRoutes= express.Router();

itemRoutes.post("/createItem",createItem)
// itemRoutes.get("/getAllItems",getAllItems)
// itemRoutes.get("/getItemById",getItemById)


module.exports={itemRoutes}