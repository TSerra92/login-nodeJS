const repositories = require("../repositories/index.repositories")

async function registerPermissions(req){
    const { name, description } = req.body

    const payloadErrors = await verifyPayloadRegisterPermissions(req.body)
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

    const newPermission = {
        name: name,
        description: description
    }

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

async function verifyPayloadRegisterPermissions(reqBody){
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
    listPermissions
}