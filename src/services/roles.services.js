

async function registerRole(req){
    const { name, description } = req.body

    const payloadErros = await verifyPayloadRegisterRole(req.body)
    if(payloadErros.length > 0){
        return ({
            httpCode: 422,
            success: false,
            controller: 'Roles',
            action: 'RegisterRoles',
            message: 'Falha na validação do payload da requisição.',
            result: payloadErros
        })
    }

    

    
}

async function verifyPayloadRegisterRole(reqBody){
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