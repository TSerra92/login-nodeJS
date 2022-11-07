const jwtHelper = require("../helpers/jwt.helpers")

const checkToken = async(req, res, next) => {
    try{
        const reqHeaderAuth = req.headers.authorization
        if(!reqHeaderAuth){
            return res.status(401).send({
                success: false,
                controller: 'AuthMiddleware',
                action: 'AuthMiddleware',
                message: "Acesso negado. O Header Authorization é obrigatório.",
                result: null
            })
        }

        const token = await jwtHelper.getToken(req)
        if(!token){
            return res.status(401).send({
                success: false,
                controller: 'AuthMiddleware',
                action: 'AuthMiddleware',
                message: "Acesso negado. O token enviado é inválido.",
                result: null
            })
        }

        const tokenVerified = await jwtHelper.verifyToken(token)
        req.user = tokenVerified
        next()
    }catch(err){
        return res.status(500).send({
            success: false,
            controller: 'AuthMiddleware',
            action: 'AuthMiddleware',
            message: "Acesso negado.",
            result: `${err}`
        })
    }
}

module.exports = {checkToken}