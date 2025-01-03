const UserModel = require("../models/UserModel");
var svgCaptcha = require('svg-captcha');
const NodeCache = require('node-cache');
const { verifyCaptcha } = require("../utils/verifyCaptcha");
const jsonwebtoken=require('jsonwebtoken');
const captchaCache = new NodeCache({ stdTTL: 300, checkperiod: 60 }); // TTL of 5 minutes
const getAllUsers=(req,res)=>{
   return res.status(200).json({ error: 'Something went wrong!' });
}
const getCaptcha = (req, res) => {
  let captcha=svgCaptcha.create()
  const key = (Math.random()*100000000).toString().split(".")[0];
  captchaCache.set(key, captcha.text);
  res.json({captcha:captcha,
    txnId:key
  })

  return res
};
const login=async(req,res)=>{
    const {captcha, txnId,userName,password}=req.body;
    let isValid=verifyCaptcha(captchaCache,req.body)
    if(!isValid){
        return res.status(401).json({ message: 'Invalid Captcha' });
    }
    if(!captcha){
        return res.status(400).json({ message: 'Captcha is required' });
    }
    if(!txnId){
        console.log("Transaction Id is missing")
        return res.status(400).json({ message: 'Transaction ID is required' });
    }
  const user=await UserModel.findOne({userName})
  if(user){
    if(user.password===password){
      try{
        const token= jsonwebtoken.sign({userName:userName,date:Date.now()},process.env.JWT_SECRET_KEY,{ expiresIn: '1h' })
        return res.status(200).json({ message: 'Login Successful',token:token, user: user });
      }catch(e){
        console.log("Error generating JWT token",e)
        return res.status(500).json({ message: 'Error generating JWT token' });
      }
        
    }else{
        return res.status(401).json({ message: 'Invalid Password' });
    }
  }else{
    return res.status(404).json({ message: 'User not found' });
  }
}
const createUser = async (req, res) => {
    const { userName, email, firstName, password, role } = req.body;

    try {
        // Check if the user already exists
        const user = await UserModel.findOne({ userName });
        if (user) {
            return res.status(409).json({ error: 'User already exists' });
        }

        // Create and save the new user
        const newUser = new UserModel({ userName, email, firstName, password, role });
        const response = await newUser.save();

        // Return success response
        return res.status(201).json({ message: 'User created successfully', user: response });
    } catch (error) {
        // Handle errors
        console.error('Error creating user:', error.message);
        return res.status(500).json({ error: error.message });
    }
};
module.exports={getAllUsers,getCaptcha,login,createUser};