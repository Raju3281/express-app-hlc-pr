const mongoose = require('mongoose')


const ItemModel =mongoose.Schema({
    itemName:{type:String,required:true},
    itemPrice:{type:Number,required:true},
    itemDesc:{type:String,required:true},
    itemQuantity:{type:Number,default: 1},
    discountPrice:{type:Number},
    itemCategory:{type:String},
    itemImage:{type:String},
    createdAt: {type: Date, default: Date.now}
})


module.exports = mongoose.model('Item',ItemModel)