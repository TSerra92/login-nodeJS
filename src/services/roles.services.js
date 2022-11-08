const repositories = require("../repositories/index.repositories")

async function registerRole(req){
    const { name, description } = req.body

    const payloadErrors = await verifyPayloadRegisterRole(req.body)
    if(payloadErros.length > 0){
        return ({
            httpCode: 422,
            success: false,
            controller: 'Roles',
            action: 'RegisterRole',
            message: 'Falha na validação do payload da requisição.',
            result: payloadErrors
        })
    }

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
    
    const newRole = {
        name: name,
        description: description
    }

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
    listRoles
}