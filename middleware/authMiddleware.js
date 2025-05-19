const jwt=require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    
    const authHeader=req.headers.authorization  //header alıyoruz

    if(!authHeader || !authHeader.startsWith("Bearer ")){    //token doğrulama
        return res.status(401).json({message:"Token Bulunamadı"})
}

    const token=authHeader.split(" ")[1]  //tokeni aldık


    try{
        const decoded=jwt.verify(token,process.env.SECRET_TOKEN)
    
        req.user=decoded
    
        next()
    
    } catch(err){
        return res.status(401).json({message:"Geçersiz token"})
    }
}
    
module.exports=verifyToken