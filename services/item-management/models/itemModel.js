const mongoose = require('mongoose')


const ItemModel =mongoose.Schema({
    itemName:{type:String,required:true},
    itemPrice:{type:Number,required:true},
    itemDesc:{type:String,required:true},
    discountPrice:{type:Number},
    itemCategory:{type:String},
    createdAt: {type: Date, default: Date.now}
})


module.exports = mongoose.model('Item',ItemModel)