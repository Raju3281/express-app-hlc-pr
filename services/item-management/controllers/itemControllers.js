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

const getAllItems=async(req,res) => {
  try{
    const items=await itemModel.find()
    return res.json(items)
  }catch(err){
       return res.status(500).json({message: err.message})
  }
}
const getItemById=async(req,res) => {
  const {id}=req.params
  try{
    const item=await itemModel.findOne({_id:id})
    if(item){
      return res.json(item)
    }else{
      return res.status(404).json({message: 'Item not found with id "' + id})
    }
  }catch(err){
    console.log(err)
    return res.status(500).json({message: err.message})
  }
}

module.exports = {
  createItem,
  getAllItems,
  getItemById
}