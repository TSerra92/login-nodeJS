const repositories = require("../repositories/index.repositories")
const bcryptHelper = require("../helpers/bcrypt.helpers")
const jwtHelper = require("../helpers/jwt.helpers")


async function registerUser(req){
    //Desestruturando os dados do body da requisição.
    const { name, cpf, email, pass1, pass2, dob, tel, photo } = req.body

    //Valida os dados do Payload
    const payloadErros = await verifyPayloadUserRegister(req.body)
    if(payloadErros.lenght > 0){
        return ({
            httpCode: 422,
            success: false,
            controller: 'Users',
            action: 'RegisterUsers',
            message: 'Falha na validação do payload da requisição',
            result: payloadErros
        })
    }

    //Verifica se o email ja esta em uso
    const userByEmail = await getUser("email", email)
    if(userByEmail !== null){
        return ({
            httpCode: 409,
            success: false,
            action: 'RegisterUsers',
            message: 'Email ja está sendo utilizado',
            result: null
        })
    }

    //Criar senha criptografada com base na senha passada no reqBody
    const bcryptPass = await bcryptHelper.bcryptCreate(pass1)

    //Instancia os dados passados na reqBody em um objeto, e cadastra na tabela user através do comando .create.
    const newUser = {
        name: name,
        cpf: cpf,
        email: email,
        pass: bcryptPass,
        dob: dob,
        tel: tel,
        photo: photo
    }

    //Cria o usuário no bando de dados através do .create
    await repositories.create("Users", newUser)

    //Desestrutura o objeto para retirar a senha antes de retornar o usuário registrado.
    const { ["pass"]:pass, ...restNewUser } = newUser


    return ({
        httpCode: 200,
        success: true,
        controller: 'Users',
        action: 'RegisterUsers',
        message: 'Usuário criado com sucesso',
        result: restNewUser
    })

}

async function loginUser(req){
    //Desestruturação da requisição.
    const { email, pass } = req.body

    //Valida os dados do Payload
    const payloadErros = await verifyPayloadUserLogin(req.body)
    if(payloadErros.lenght > 0){
        return ({
            httpCode: 422,
            success: false,
            controller: 'Users',
            action: 'LoginUsers',
            message: "Falha na validação do payload da requisição.",
            result: payloadErros
        })
    }

    const userByEmail = await getUser("email", email)

    //Verifica se o usuário foi encontrado.
    if(userByEmail === null){
        return ({
            httpCode: 404, 
            success: false,
            controller: 'Users',
            action: 'LoginUsers',
            message: 'Email não encontrado',
            result: null
        })
    }

    //Compara a senha informada com a senha criptografado no banco de dados.
    const checkPass = await bcryptHelper.bcryptCompare(pass, userByEmail.pass) 

    //Verifica se a senha informada está correta.
    if(checkPass === false){
        return ({
            httpCode: 403,
            success: false,
            controller: 'Users',
            action: 'LoginUsers',
            message: 'Senha incorreta.',
            result: null
        })
    }

    const jwToken = await jwtHelper.createJWToken(userByEmail)

    return ({
        httpCode: 200,
        success: true,
        controller: 'Users',
        action: 'LoginUsers',
        message: 'Usuário logado com sucesso.',
        result: jwToken
    })


}

async function checkToken(req){
    //Instancia os dados do header da requisição
    const token = req.headers.authorization

    //Verifica se os dados da requisição são válidos.
    const verifyPayloadToken = await verifyPayloadCheckToken(token)
    if(verifyPayloadToken > 0){
        return ({
            httpCode: 422,
            success: false,
            controller: 'Users',
            action: 'CheckToken',
            message: "Falha na validação do payload da requisição.",
            result: verifyPayloadToken
        })
    }

    //Através do token, busca informações do usuário.
    const decodedToken = await jwtHelper.verifyToken(token)

    //Através das informaçoes do decodedToken, buscar o usuário no database.
    const userToken = await getUser("id", decodedToken.id)

    return ({
        httpCode: 200,
        success: true,
        controller: 'Users',
        action: 'CheckToken',
        message: "Token verificado com sucesso.",
        result: userToken.dataValues
    })

}

async function editUser(req){
    //Instanceia os dados do header da requisição e já passa pela função getToken para retornar APENAS o token.
    const reqHeaderAuth = await jwtHelper.getToken(req)

    //Verifica se o token recebido é válido.
    if(!reqHeaderAuth){
        return ({
            httpCode: 401,
            success: false,
            controller: 'Users',
            action: 'EditUser',
            message: "Token de autorização inválido.",
            result: null
        })
    }

    //Através da função verify, verifica o token e retorna Nome e ID do usuário com o token.
    const verifiedUser = await jwtHelper.verifyToken(reqHeaderAuth)

    const { name, cpf, email, pass, dob, tel, photo } = req.body

    //Verifica se as informações da requisição são válidas.
    const payloadErrors = await verifyPayloadUserRegister(req.body)
    if(payloadErrors.lenght > 0){
        return ({
            httpCode: 422,
            success: false,
            controller: 'Users',
            action: 'RegisterUsers',
            message: 'Falha na validação do payload da requisição',
            result: payloadErrors
        })
    }
    //Retorna o usuário através do id encontrado na função verify.
    let userFound = await getUser("id", verifiedUser.id)


    //Criptografa a senha
    const bcryptPass = await bcryptHelper.bcryptCreate(pass)

    const newUserInfo = {
        name: name,
        cpf: cpf,
        email: email,
        pass: bcryptPass,
        dob: dob,
        tel: tel,
        photo: photo
    }

    //Atualiza o registro do usuário no banco de dados, com os dados passados no reqBody.
    // await userFound.update({
    //     name: name,
    //     cpf: cpf,
    //     email: email,
    //     pass: pass,
    //     dob: dob,
    //     tel: tel,
    //     photo: photo
    // })

    await repositories.update(userFound, newUserInfo)




    return ({
        httpCode: 200,
        success: true,
        controller: 'Users',
        action: 'EditUser',
        message: "Usuário editado com sucesso.",
        result: null
    })


}

async function deleteUser(req){
    //Recebe os dados do header e retorna apenas o token.
    const reqAuthToken = await jwtHelper.getToken(req)

    //Verifica se o token é válido.
    if(!reqAuthToken){
        return ({
            httpCode: 401,
            success: false,
            controller: 'Users',
            action: 'DeleteUser',
            message: "Token de autorização inválido.",
            result: null
        })
    }

    //Busca algumas infos do usuário através do token.
    const verifiedUser = await jwtHelper.verifyToken(reqAuthToken)

    //Retorna o usuário através do ID encontrado  no verifiedUser.
    const userFound = await getUser("id", verifiedUser.id)

    //Verifica se o user foi encontrado.
    if(!userFound){
        return ({
            httpCode: 404,
            success: false,
            controller: 'Users',
            action: 'DeleteUser',
            message: "Usuário não encontrado.",
            result: userFound
        })
    }
    
    //Apaga o usuário encontrado.
    await userFound.destroy()

    return ({
        httpCode: 200,
        success: true,
        controller: 'Users',
        action: 'DeleteUser',
        message: "Usuário deletado com sucesso.",
        result: null
    })
}

async function listUsers(req){
    const userList = await repositories.findAll("Users", )

    return ({
        httpCode: 200,
        success: true,
        controller: 'Users',
        action: 'ListUser',
        message: "Lista de usuários retornada com sucesso.",
        result: userList
    })
}

async function verifyConfirmationPassword(pass1, pass2){
    return pass1 === pass2 ? true : false
}

async function verifyPayloadUserRegister(reqBody){
    let erros = []
    const { name, cpf, email, pass1, pass2, dob, tel, photo } = reqBody;

    if(name == '' || name == null || name == undefined){
        erros.push('O nome do usuário não pode ser vazio.')
    }
    if(typeof name != "string"){
        erros.push('O nome do usuário deve ser do tipo string.')
    }
    if(email == '' || email == null || email == undefined){
        erros.push('O email do usuário não pode ser vazio.')
    }
    if(typeof email != "string"){
        erros.push('O email do usuário deve ser do tipo string.')
    }
    //!FAZER FUNÇÃO PARA VALIDAR O EMAIL

    if(cpf == '' || cpf == null || cpf == undefined){
        erros.push('O cpf do usuário não pode ser vazio.')
    }
    if(typeof cpf != "string"){
        erros.push('O cpf do usuário deve ser do tipo string.')
    }
    //!FAZER FUNÇÃO PARA VALIDAR O CPF

    if(pass1 == '' || pass1 == null || pass1 == undefined){
        erros.push('A senha do usuário não pode ser vazia.')
    }
    if(typeof pass1 != "string"){
        erros.push('A senha do usuário deve ser do tipo string.')
    }

    const verifyPassword = await verifyConfirmationPassword(pass1, pass2)
    if(!verifyPassword){
        erros.push('Senhas informadas não são iguais.')
    }

    if(dob == '' || dob == null || dob == undefined){
        erros.push('A data de nascimento do usuário não pode ser vazio.')
    }
    if(typeof dob != "string"){
        erros.push('A data de nascimento do usuário deve ser do tipo string.')
    }

    if(tel == '' || tel == null || tel == undefined){
        erros.push('O telefone do usuário não pode ser vazio.')
    }
    if(typeof tel != "string"){
        erros.push('O telefone do usuário deve ser do tipo string.')
    }

    return erros
}

async function getUser(tableColumn, valueToLookFor){
    if(tableColumn === "id"){
        const userFound = await repositories.findByPk("Users", valueToLookFor)
        return userFound
    }

    const userFound = await repositories.findOne("Users", {
        where: {
            [tableColumn]: valueToLookFor
        }
    })
    return userFound
}

async function verifyPayloadUserLogin(reqBody){

    let erros = []
    if(reqBody.email === '' || reqBody.email === null || reqBody.email === undefined){
        erros.push('O email do usuário não pode ser vazio.')
    }
    if(typeof reqBody.email != "string"){
        erros.push('O email do usuário deve ser do tipo string.')
    }
    if(reqBody.pass === '' || reqBody.pass === null || reqBody.pass === undefined){
        erros.push('A senha do usuário não pode ser vazia.')
    }
    if(typeof reqBody.pass != "string"){
        erros.push('A senha do usuário deve ser do tipo string.')
    }

    return erros
}

async function verifyPayloadCheckToken(token){
    let erros = []
    if(token === '' || token === null || token === undefined){
        erros.push('O token do usuário não pode ser vazio.')
    }
    if(typeof token != "string"){
        erros.push('O token do usuário deve ser do tipo string.')
    }

    return erros
}


module.exports = {
    registerUser,
    loginUser,
    checkToken,
    editUser,
    deleteUser,
    listUsers,
    verifyPayloadUserRegister,
    verifyConfirmationPassword,
    getUser,
    verifyPayloadUserLogin,
    verifyPayloadCheckToken
}
