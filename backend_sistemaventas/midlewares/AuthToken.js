const jwt = require("jsonwebtoken")

const authToken = (req,res,next) =>{
   
console.log(req.headers);
    const token = req.headers.authorization
    //console.log(token);
    if(!token) return res.status(401).send({message:"Token no valido"})

    const verifiedToken = jwt.verify(token,process.env.SECRET)

    if (verifiedToken) {
        //console.log(verifiedToken);
    req.user = verifiedToken
    next()
    }else {
        res.status(401).send({message:"token incorrecto"})
    }
    

}

module.exports = {authToken}