const express = require('express');
const { createItem, getAllItems, getItemById, deleteItemById } = require('../controllers/itemControllers');
const itemRoutes= express.Router();

itemRoutes.post("/createItem",createItem)
itemRoutes.get("/getAllItems",getAllItems)
itemRoutes.get("/getItemById/:id",getItemById)
itemRoutes.delete("/deleteItemById/:id",deleteItemById)

module.exports={itemRoutes}