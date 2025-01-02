const verifyCaptcha=(captchaCache,data)=>{
        const cachedCaptcha = captchaCache.get(data.txnId);
        if(cachedCaptcha === data.captcha){
            captchaCache.flushAll();
            return true;
        }
        
    return false
  
}

module.exports={verifyCaptcha}