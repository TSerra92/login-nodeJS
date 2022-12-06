const usersServices = require('../services/users.services')

module.exports = class UserController{
    static async registerUser(req, res){
        try{

            //Chama a função para cadastrar novo usuário.
            const result = await usersServices.registerUser(req)

            //Desestrutura o result para separar o código Http da resposta.
            const { ["httpCode"]:httpCode, ...response } = result

            //Retorna a resposta da requisição.
            return res.status(httpCode).send(response)
            
        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Users',
                action: 'RegisterUsers',
                message: 'Falha ao realizar a requisição.',
                result: `${err}`
            })
        }
    }

    static async loginUser(req, res){
        try{

            const result = await usersServices.loginUser(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Users',
                action: 'LoginUsers',
                message: 'Falha ao realizar a requisição.',
                result: `${err}`
            })
        }
    }

    static async checkToken(req, res){
        try{

            const result = await usersServices.checkToken(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Users',
                action: 'CheckToken',
                message: 'Falha ao realizar a requisição.',
                result: `${err}`
            })
        }
    }
    
    static async editOwnUser(req, res){
        try{
            const result = await usersServices.editOwnUser(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)
            }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Users',
                action: 'EditOwnUser',
                message: 'Falha ao realizar a requisição.',
                result: `${err}`
            })
        }
    }

    static async editOtherUser(req, res){
        try{
            const result = await usersServices.editOtherUser(req)
            const { ["httpCode"]:httpCode, ...response } =  result
            
            return res.status(httpCode).send(response)
        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Users',
                action: 'EditOtherUser',
                message: 'Falha ao ralizar a requisição.',
                result: `${err}`
            })
        }
    }

    static async deleteOtherUser(req,res){
        try{
            const result = await usersServices.deleteOtherUser(req)
    
            const { ["httpCode"]:httpCode, ...response } = result
    
            return res.status(httpCode).send(response)
            }catch(err){
                return res.status(500).send({
                    success: false,
                    controller: 'Users',
                    action: 'DeleteOtherUser',
                    message: 'Falha ao realizar a requisição.',
                    result: `${err}`
                })
            }
    }

    static async deleteOwnUser(req, res){
        try{
        const result = await usersServices.deleteOwnUser(req)

        const { ["httpCode"]:httpCode, ...response } = result

        return res.status(httpCode).send(response)
        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Users',
                action: 'DeleteOwnUser',
                message: 'Falha ao realizar a requisição.',
                result: `${err}`
            })
        }
    }

    static async listUsers(req, res){
        try{
        const result = await usersServices.listUsers(req)

        const { ["httpCode"]:httpCode, ...response } = result

        return res.status(httpCode).send(response)
        
        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Users',
                action: 'ListUser',
                message: 'Falha ao realizar a requisição.',
                result: `${err}`
            })
        }
    }

    static async registerUserRolesPermissions(req, res){
        try{
            const result = await usersServices.registerUserRolesPermissions(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)
        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Users',
                action: 'RegisterUserRolesPermissions',
                message: 'Falha ao realizar a requisição.',
                result: `${err}`
            })
        }
    }



}