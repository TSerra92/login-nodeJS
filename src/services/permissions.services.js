const repositories = require("../repositories/index.repositories")
const jwtHelper = require("../helpers/jwt.helpers")

async function registerPermissions(req){
    //Instanceia o Token passado no header da requisição.
    const reqHeaderAuth = await jwtHelper.getToken(req)

    //Verifica se o Token é valido.
    if(!reqHeaderAuth){
        return({
            httpCode: 401,
            success: false,
            controller: 'Permissions',
            action: "RegisterPermissions",
            message: "Token de autorização inválido.",
            result: null
        })
    }

    //Desestruturação do body da requisição.
    const { name, description } = req.body

    //Verifica se as informações da requisição são válidas.
    const payloadErrors = await verifyPayloadPermissions(req.body)
    if (payloadErrors.length){
        return ({
            httpCode: 422,
            success: false,
            controller: 'Permissions',
            action: 'RegisterPermission',
            message: 'Falha na validação do payload da requisição.',
            result: payloadErrors
        })
    }

    //Verifica se o nome da permissão já está em uso.
    const checkPermission = await getPermission("name", name)
    if(checkPermission !== null){
        return ({
            httpCode: 409,
            success: false,
            controller: 'Permissions',
            action: 'PermissionsUsers',
            message: 'Uma permissão com esse nome já existe.',
            result: null
        })
    }

    //Instancia os dados passados na reqBody em um objeto.
    const newPermission = {
        name: name,
        description: description
    }

    //Cria a permissão no banco de dados através do .create
    await repositories.create("Permissions", newPermission)

    return({
        httpCode: 200,
        success: true,
        controller: 'Permissions',
        action: 'RegisterPermissions',
        message: 'Permissão criada com sucesso.',
        result: newPermission
    })
}

async function listPermissions(req){
    //Instanceia o Token passado no header da requisição.
    const reqHeaderAuth = await jwtHelper.getToken(req)

    //Verifica se o Token é valido.
    if(!reqHeaderAuth){
        return({
            httpCode: 401,
            success: false,
            controller: 'Permissions',
            action: "ListPermissions",
            message: "Token de autorização inválido.",
            result: null
        })
    }

    //Instanceia a lista de permissões através da função findAll.
    const permissionsList = await repositories.findAll("Permissions", )

    return ({
        httpCode: 200,
        success: true,
        controller: 'Permissions',
        action: 'ListPermissions',
        message: "Lista de permissões retornada com sucesso.",
        result: permissionsList
    })
}

async function editPermission(req){
    //Instanceia o Token passado no header da requisição.
    const reqHeaderAuth = await jwtHelper.getToken(req)

    //Verifica se o Token é valido.
    if(!reqHeaderAuth){
        return({
            httpCode: 401,
            success: false,
            controller: 'Permissions',
            action: "EditPermissions",
            message: "Token de autorização inválido.",
            result: null
        })
    }

    //Desestruturação do body da requisição.
    const { name, newName, newDescription } = req.body

    //Verifica se as informações da requisição são válidas.
    const payloadErrors = await verifyPayloadPermissions(req.body)
    if(payloadErrors.length > 0){
        return ({
            httpCode: 422,
            success: false,
            controller: 'Permissions',
            action: 'EditPermissions',
            message: 'Falha na validação do payload da requisição',
            result: payloadErrors
        })
    }

    //Retorna a Permissão que está no banco de dados, através do nome passado na requisição.
    const permissionToBeEdited = await getPermission("name", name)
    if(!permissionToBeEdited){
        return ({
            httpCode: 404,
            success: false,
            controller: "Permissions",
            action: "EditPermission",
            message: "Permissão não encontrada.",
            result: null
        })
    }

    //Instanceia as novas informações passadas na requisição em um novo objeto.
    const newPermissionInfo = {
        name: newName,
        description: newDescription
    }

    //Usa a função update do repositories para atualizar os campos no banco de dados.
    await repositories.update(
        "Permissions", 
        newPermissionInfo, 
        {where: {id: permissionToBeEdited.id}}
    )
    
    return ({
        httpCode: 200,
        success: true,
        controller: 'Permissions',
        action: 'EditPermission',
        message: "Permissão editado com sucesso.",
        result: newPermissionInfo
    })
}

async function deletePermission(req){
    //Recebe os dados do header e retorna apenas o token.
    const reqAuthToken = await jwtHelper.getToken(req)

    //Verifica se o token é válido.
    if(!reqAuthToken){
        return ({
            httpCode: 401,
            success: false,
            controller: 'Permissions',
            action: 'DeletePermission',
            message: "Token de autorização inválido.",
            result: null
        })
    }

    //Instanceia os dados do body da requisição.
    const { name } = req.body

    //Retorna a Permissão que está no banco de dados, através do nome passado na requisição.
    const permissionToBeDeleted = await getPermission("name", name)

    
}

async function verifyPayloadPermissions(reqBody){
    let erros = []
    const { name, description } = reqBody
    if(name == '' || name == null || name == undefined){
        erros.push('O nome do role não pode ser vazio.')
    }
    if(typeof name != "string"){
        erros.push('O nome do role deve ser do tipo string.')
    }
    if(description == '' || description == null || description == undefined){
        erros.push('O nome do usuário não pode ser vazio.')
    }
    if(typeof description != "string"){
        erros.push('O nome do usuário deve ser do tipo string.')
    }

    return erros
}

async function getPermission(tableColumn, valueToLookFor){
    if(tableColumn === "id"){
        const roleFound = await repositories.findByPk("Permissions", valueToLookFor)
        return roleFound
    }

    const roleFound = await repositories.findOne("Permissions", {
        where: {
            [tableColumn]: valueToLookFor
        }
    } )
    return roleFound
}

module.exports = {
    registerPermissions,
    listPermissions,
    editPermission,
    deletePermission
}
