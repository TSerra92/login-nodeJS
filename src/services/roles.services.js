const repositories = require("../repositories/index.repositories")
const jwtHelper = require("../helpers/jwt.helpers")

async function registerRole(req){
    //Instanceia o Token passado no header da requisição.
    const reqHeaderAuth = await jwtHelper.getToken(req)

    //Verifica se o Token é valido.
    if(!reqHeaderAuth){
        return({
            httpCode: 401,
            success: false,
            controller: 'Roles',
            action: "ListRoles",
            message: "Token de autorização inválido.",
            result: null
        })
    }

    //Desestruturando os dados do body da requisição.
    const { name, description } = req.body

    //Valida os dados do Payload
    const payloadErrors = await verifyPayloadRegisterRole(req.body)
    if(payloadErrors.length > 0){
        return ({
            httpCode: 422,
            success: false,
            controller: 'Roles',
            action: 'RegisterRole',
            message: 'Falha na validação do payload da requisição.',
            result: payloadErrors
        })
    }

    //Verifica se o nome do cargo já está em uso.
    const checkRole = await getRole("name", name)
    if(checkRole !== null){
        return ({
            httpCode: 409,
            success: false,
            controller: 'Roles',
            action: 'RoleUsers',
            message: 'Um cargo com esse nome já existe.',
            result: null
        })
    }
    
    //Instancia os dados passados na reqBody em um objeto.
    const newRole = {
        name: name,
        description: description
    }

    //Cria o cargo no banco de dados através do .create
    await repositories.create("Roles", newRole)

    return({
        httpCode: 200,
        success: true,
        controller: 'Roles',
        action: 'RegisterRole',
        message: 'Cargo criado com sucesso.',
        result: newRole
    })
}

async function listRoles(req){
    //Instanceia o Token passado no header da requisição.
    const reqHeaderAuth = await jwtHelper.getToken(req)

    //Verifica se o Token é valido.
    if(!reqHeaderAuth){
        return({
            httpCode: 401,
            success: false,
            controller: 'Roles',
            action: "ListRoles",
            message: "Token de autorização inválido.",
            result: null
        })
    }

    //Instanceia a lista de cargos através da função findAll.
    const rolesList = await repositories.findAll("Roles", )

    return ({
        httpCode: 200,
        success: true,
        controller: 'Roles',
        action: 'ListRoles',
        message: "Lista de cargos retornada com sucesso.",
        result: rolesList
    })
}

async function editRole(req){
    //Instanceia o Token passado no header da requisição.
    const reqHeaderAuth = await jwtHelper.getToken(req)

    //Verifica se o Token é valido.
    if(!reqHeaderAuth){
        return({
            httpCode: 401,
            success: false,
            controller: 'Roles',
            action: "EditRoles",
            message: "Token de autorização inválido.",
            result: null
        })
    }


    //Desestruturação do body da requisição.
    const { name, newName, newDescription } = req.body


    //Verifica se as informações da requisição são válidas.
    const payloadErrors = await verifyPayloadEditRole(req.body)
    if(payloadErrors.length > 0){
        return ({
            httpCode: 422,
            success: false,
            controller: "Roles",
            action: "EditRole",
            message: "Falha na validação do payload da requisição.",
            result: payloadErrors
        })
    }

    //Retorna o Cargo que está no banco de dados, através do nome passado na requisição.
    const roleToBeEdited = await getRole("name", name)
    if (!roleToBeEdited){
        return ({
            httpCode: 404,
            success: false,
            controller: "Roles",
            action: "EditRole",
            message: "Cargo não encontrado.",
            result: null
        })
    }

    //Instanceia as novas informações passadas na requisição em um novo objeto.
    const newRoleInfo = {
        name: newName,
        description: newDescription
    }

    //Usa a função update do repositories para atualizar os campos no banco de dados.
    await repositories.update(
        "Roles", 
        newRoleInfo, 
        {where: {id: roleToBeEdited.id}}
    )

    return ({
        httpCode: 200,
        success: true,
        controller: 'Roles',
        action: 'EditRole',
        message: "Cargo editado com sucesso.",
        result: newRoleInfo
    })

}

async function deleteRole(req){
    //Instanceia o Token passado no header da requisição.
    const reqHeaderAuth = await jwtHelper.getToken(req)

    //Verifica se o Token é valido.
    if(!reqHeaderAuth){
        return({
            httpCode: 401,
            success: false,
            controller: 'Roles',
            action: "EditRoles",
            message: "Token de autorização inválido.",
            result: null
        })
    }

    //!Terminar rota DELETE. Pode passar Body?

}

async function verifyPayloadRegisterRole(reqBody){
    let erros = []
    const { name, description } = reqBody
    if(name == '' || name == null || name == undefined){
        erros.push('O nome do cargo não pode ser vazio.')
    }
    if(typeof name != "string"){
        erros.push('O nome do cargo deve ser do tipo string.')
    }
    if(description == '' || description == null || description == undefined){
        erros.push('A descrição não pode ser vazio.')
    }
    if(typeof description != "string"){
        erros.push('A descrição deve ser do tipo string.')
    }
    return erros
}

async function verifyPayloadEditRole(reqBody){
    let erros = []
    const { name, newName, newDescription } = reqBody
    if(name == '' || name == null || name == undefined){
        erros.push('O nome do cargo não pode ser vazio.')
    }
    if(typeof name != "string"){
        erros.push('O nome do cargo deve ser do tipo string.')
    }
    if(newName == '' || newName == null || newName == undefined){
        erros.push('O novo nome do cargo não pode ser vazio.')
    }
    if(typeof newName != "string"){
        erros.push('O novo nome do cargo deve ser do tipo string.')
    }
    if(newDescription == '' || newDescription == null || newDescription == undefined){
        erros.push('A nova descrição não pode ser vazio.')
    }
    if(typeof newDescription != "string"){
        erros.push('A nova descrição deve ser do tipo string.')
    }

    return erros
}

async function getRole(tableColumn, valueToLookFor){
    if(tableColumn === "id"){
        const roleFound = await repositories.findByPk("Roles", valueToLookFor)
        return roleFound
    }

    const roleFound = await repositories.findOne("Roles", {
        where: {
            [tableColumn]: valueToLookFor
        }
    } )
    return roleFound
}


module.exports = {
    registerRole,
    listRoles,
    editRole,
    deleteRole
}