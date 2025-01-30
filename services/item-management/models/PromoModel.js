const mongoose =require('mongoose')

var dt = new Date();
const PromoModel = mongoose.Schema({
    promoCode:{type:String, required:true,unique:true},
    promoName:{type:String, required:true},
    promoType:{type:String},
    promoPrice:{type:Number, required:true},
    promoDesc:{type:String},
    startDate:{type:Date, required:true,default: Date.now},
    endDate:{type:Date, required:true,default: dt.setDate(dt.getDate() + 365)},
    createdAt: {type: Date, default: Date.now}
})

module.exports=mongoose.model('Promo',PromoModel)