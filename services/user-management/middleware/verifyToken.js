
const jsonwebtoken=require('jsonwebtoken')
const verifyToken=(req,res,next)=>{
    const excludedRoutes=["/api/users/getCaptcha","/api/users/login"]
    if(excludedRoutes.includes(req.path)){
        return next();
    }
    const token=req.header('Authorization')?.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Unautherized' });
    }
    try{
        const decoded= jsonwebtoken.verify(token,process.env.JWT_SECRET_KEY)
        req.user = decoded
        next()
    }catch{
       return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports={verifyToken}