const express = require('express');
const { createItem, getAllItems, getItemById } = require('../controllers/itemControllers');
const itemRoutes= express.Router();

itemRoutes.post("/createItem",createItem)
itemRoutes.get("/getAllItems",getAllItems)
itemRoutes.get("/getItemById/:id",getItemById)


module.exports={itemRoutes}