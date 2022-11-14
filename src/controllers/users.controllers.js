const usersServices = require("../services/users.services")

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
                message: "Falha ao realizar a requisição.",
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
                message: "Falha ao realizar a requisição.",
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
                message: "Falha ao realizar a requisição.",
                result: `${err}`
            })
        }
    }
    
    static async editUser(req, res){
        try{

            const result = await usersServices.editUser(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)
            //Instanceia os dados do header da requisição e já passa pela função getToken para retornar APENAS o token.
            //const reqHeaderAuth = await jwtHelper.getToken(req)

            //Verifica se o token recebido é válido.
            // if(!reqHeaderAuth){
            //     return res.status(400).json({
            //         success: false,
            //         controller: 'Users',
            //         action: 'EditUser',
            //         message: "Token de autorização inválido.",
            //         result: null
            //     })
            // }

            //Através da função verify, verifica o token e retorna Nome e ID do usuário com o token.
            //const verifiedUser = await jwtHelper.verifyToken(reqHeaderAuth)

            //Instanceia as informações do body da requisição.
            //const reqBody = req.body

            //Verifica se as informações da requisição são válidas.
            // const errorsVerifyPayload = await usersServices.verifyPayloadUserRegister(reqBody)
            // if(errorsVerifyPayload.lenght > 0){
            //     return res.status(422).send({
            //         success: false,
            //         controller: 'Users',
            //         action: 'RegisterUsers',
            //         message: 'Falha na validação do payload da requisição',
            //         result: errorsVerifyPayload
            //     })
            // }

            //Retorna o usuário através do id encontrado na função verify.
            //let userFound = await usersServices.getUser("id", verifiedUser)

            //Atualiza o registro do usuário no banco de dados, com os dados passados no reqBody.
            // await userFound.update({
            //     name: reqBody.name,
            //     cpf: reqBody.cpf,
            //     email: reqBody.email,
            //     pass: reqBody.pass,
            //     dob: reqBody.dob,
            //     tel: reqBody.tel,
            //     photo: reqBody.photo
            // })

        //     return res.status(200).send({
        //         success: true,
        //         controller: 'Users',
        //         action: 'EditUser',
        //         message: "Usuário editado com sucesso.",
        //         result: null
        //     })
         }catch(err){
            return res.status(500).json({
                success: false,
                controller: 'Users',
                action: 'EditUser',
                message: "Falha ao realizar a requisição.",
                result: `${err}`
            })
        }
    }

    static async deleteUser(req, res){
        try{
        const result = await usersServices.deleteUser(req)

        const { ["httpCode"]:httpCode, ...response } = result

        return res.status(httpCode).send(response)
        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Users',
                action: 'DeleteUser',
                message: "Falha ao realizar a requisição.",
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
                message: "Falha ao realizar a requisição.",
                result: `${err}`
            })
        }
    }



}