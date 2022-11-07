const jwt = require("jsonwebtoken")
require("dotenv").config()

async function createJWToken(user){
    return jwt.sign({
        name: user.name,
        id: user.id
    }, process.env.SECRET_TOKEN, {
        expiresIn: "1d"
    })

    
}

async function verifyToken(token){
    return jwt.verify(token, process.env.SECRET_TOKEN)
}

async function getToken(req){
    const authHeader = req.headers.authorization
    return authHeader.split(" ")[1]
    
}



module.exports = {
    createJWToken,
    verifyToken,
    getToken
}
