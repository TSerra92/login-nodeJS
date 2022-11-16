const errorsSchemas = {
    "Response401": {
        "type": "object",
        "properties":{
            "success": {
                "type": "string",
                "example": "false"
            },
            "controller":{
                "type": "string",
                "example": "ControllerName"
            },
            "action": {
                "type": "string",
                "example": "ActionName"
            },
            "message": {
                "type": "string",
                "example": "Unauthorized."
            },
            "result":{
                "type": "null",
                "example": "null"
            }
        }
    },
    "Response403": {
        "type": "object",
        "properties": {
            "success": {
                "type": "string",
                "example": "false"
            },
            "controller":{
                "type": "string",
                "example": "ControllerName"
            },
            "action": {
                "type": "string",
                "example": "ActionName"
            },
            "message": {
                "type": "string",
                "example": "Dados incorretos."
            },
            "result":{
                "type": "null",
                "example": "null"
            }
        }
    },
    "Response404": {
        "type": "object",
        "properties": {
            "success": {
                "type": "string",
                "example": "false"
            },
            "controller":{
                "type": "string",
                "example": "ControllerName"
            },
            "action": {
                "type": "string",
                "example": "ActionName"
            },
            "message": {
                "type": "string",
                "example": "Campo não encontrado"
            },
            "result":{
                "type": "null",
                "example": "null"
            }
        }
    },
    "Response409": {
        "type": "object",
        "properties" : {
            "success": {
                "type": "string",
                "example": "false"
            },
            "controller": {
                "type": "string",
                "example": "ControllerName "
            },
            "action": {
                "type": "string",
                "example": "ActionName"
            },
            "message": {
                "type": "string",
                "example": "O campo X está indisponível."
            },
            "result": {
                "type": "null",
                "example": "null"
            }
        }
    },

    "Response422": {
        "type": "object",
        "properties" : {
            "success": {
                "type": "string",
                "example": "false"
            },
            "controller": {
                "type": "string",
                "example": "ControllerName"
            },
            "action": {
                "type": "string",
                "example": "ActionName"
            },
            "message": {
                "type": "string",
                "example": "Falha na validação do payload da requisição."
            },
            "result": {
                "type": "array",
                "items": {
                    "type": "string",
                    "example": "O campo X não pode ser vazio."
                }
            }
        }
    },

    "Response500": {
        "type" : "object",
        "properties": {
            "success": {
                "type": "boolean",
                "example": "false"
            },
            "controller": {
                "type": "string",
                "example": "ControllerName"
            },
            "action": {
                "type": "string",
                "example": "ActionName"
            },
            "message": {
                "type": "string",
                "example": "Falha ao realizar a requisição."
            },
            "result": {
                "type": "string",
                "example": "Descrição do erro"
            },
            
        }
    }
}

const userModel = {
    "UserModel": {
        "type": "object",
        "properties": {
            "name" :{
                "type": "string",
                "example": "Usuario"
            },
            "cpf":{
                "type": "string",
                "example": "cpf"
            },
            "email":{
                "type": "string",
                "example": "email@email.com"
            },
            "pass":{
                "type": "string",
                "example": "senha123"
            },
            "dateOfBirth":{
                "type": "string",
                "example": "10/10/22"
            },
            "tel":{
                "type": "string",
                "example": "11111111111"
            },
            "photo":{
                "type": "string",
                "example": "image.jpg"
            },
        }
    }
}

module.exports = {
    errorsSchemas,
    userModel
}