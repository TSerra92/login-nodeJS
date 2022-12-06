const jwt = require("jsonwebtoken")
const repositories = require("../repositories/index.repositories")
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

async function getUserByToken(token){
    const validUser = await jwt.verify(token, process.env.SECRET_TOKEN)
    const findUser = await repositories.findOne("Users", {where: {id: validUser.id}})
    return findUser
}



module.exports = {
    createJWToken,
    verifyToken,
    getToken,
    getUserByToken
}
