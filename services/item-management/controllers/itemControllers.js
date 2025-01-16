const express = require('express')
const itemModel = require('../models/itemModel')


const createItem =async(req,res)=>{
    const {itemName,itemPrice,discountPrice,itemDesc,itemImage,itemId}=req.body
    if(itemName&&itemPrice&&itemImage){
        if(itemId){
          const existingItem=itemModel.findOne({_id:itemId})
          if(existingItem){
            existingItem.itemName=itemName
            existingItem.itemPrice=itemPrice
            existingItem.discountPrice=discountPrice
            existingItem.itemDesc=itemDesc
            existingItem.itemImage=itemImage
            await existingItem.save()
            return res.status(200).json({message: 'Item updated successfully'})
          }else{
            return res.status(404).json({message: 'Item not found'})
          }
        }else{
            const newItem=new itemModel({itemName,itemPrice,discountPrice,itemDesc,itemImage})
            await newItem.save()
            return res.status(201).json({message:'Item created successfully'})
        }
    }
}


module.exports = {createItem:createItem}