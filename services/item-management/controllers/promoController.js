const PromoModel = require("../models/PromoModel")

const savePromo=async(req,res)=>{
    const {id,promoCode,promoName,promoType,promoPrice,promoDesc,startDate,endDate}=req.body

    if(!promoCode||!promoPrice){
        return res.status(400).json({message:"Promocode and Price is mandatory"})
    }
    const promoObj = new PromoModel({
        promoCode,
        promoName,
        promoType,
        promoPrice,
        promoDesc,
        startDate,
        endDate,
        id
        });
    if(id){
        try{
            await promoObj.updateOne({_id:id})
            return res.status(200).json({message:"Promo code info updated Successfully"})
        }catch(err){
           
        }
    }else{
        try{
           const existingPromo= await PromoModel.findOne({promoCode:promoCode})
           if(existingPromo){
            return res.status(400).json({message:"Promocode is already exist"})
           }
        }catch{
          console.log("Promocode is new you can save now")
        }
    }

    try{
        await promoObj.save()
        return res.status(200).json({message:"Promo code is Saved Successfully"})
    }catch(err){
        return res.status(500).json({message:err.message})
    }

}



module.exports={savePromo}