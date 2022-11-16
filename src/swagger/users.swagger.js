const userPaths = {
    "/user/register":{
        "post": {
            "summary": "User Register",
            "description": "Essa rota é responsável por registrar um novo usuário.",
            "tags": ["Users"],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
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
                                "pass1":{
                                    "type": "string",
                                    "example": "senha123"
                                },
                                "pass2":{
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
                }
            },
            "responses": {
                "200": {
                    "description": "Usuário criado com sucesso.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties":{
                                    "success": {
                                        "type": "boolean",
                                        "example": "true"
                                    },
                                    "controller": {
                                        "type": "string",
                                        "example": "Users"
                                    },
                                    "action": {
                                        "type": "string",
                                        "example": "RegisterUsers"
                                    },
                                    "message": {
                                        "type": "string",
                                        "example": "Usuário criado com sucesso"
                                    },
                                    "result": {
                                        "type": "object",
                                        "properties": {
                                            "schema":{
                                                "$ref": "#/components/schemas/UserModel"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Falha ao realizar a requisição",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Response500"
                            }
                        }
                    }
                },
                "422": {
                    "description": "Falha na validação do payload da requisição.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Response422"
                            }
                        }
                    }
                },
                "409": {
                    "description": "Email já está sendo utilizado.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Response409"
                            }
                        }
                    }
                },
            }
        }
    },
    "/user/login": {
        "post": {
            "summary": "User Login",
            "description": "Esse rota realiza o login do usuário e gera o token.",
            "tags": ["Users"],
            "requestBody": {
                "content":{
                    "application/json":{
                        "schema":{
                            "type": "object",
                            "properties": {
                                "email": {
                                    "type": "string",
                                    "example": "email@email.com"
                                },
                                "pass": {
                                    "type": "string",
                                    "example": "senha123"
                                }
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Usuário logado com sucesso",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "success": {
                                        "type": "boolean",
                                        "example": "true"
                                    },
                                    "controller": {
                                        "type": "string",
                                        "example": "Users"
                                    },
                                    "action": {
                                        "type": "string",
                                        "example": "LoginUser"
                                    },
                                    "message": {
                                        "type": "string",
                                        "example": "Usuário logado com sucesso."
                                    },
                                    "result": {
                                        "type": "string",
                                        "example": "JWToken"
                                    }
                                }
                            }
                        }
                    }
                },
                "403": {
                    "description": "Senha Incorreta.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Response404"
                            }
                        }
                    }
                },
                "404":{
                    "description": "Email não encontrado.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Response404"
                            }
                        }
                    }
                },
                "422": {
                    "description": "Falha na validação do payload da requisição.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Response422"
                            }
                        }
                    }
                },
                "500": {
                    "description": "Falha ao realizar a requisição.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Response500"
                            }
                        }
                    }
                }
            }
        }
    },
    "/user/checktoken": {
        "get": {
            "summary": "Check Token",
            "description": "Essa rota confere se o token enviado na requisição está correto.",
            "tags": ["Users"],
            "security": [{ "bearerAuth": [] }],
            "responses": {
                "200": {
                    "description": "Usuário logado com sucesso",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "success": {
                                        "type": "boolean",
                                        "example": "true"
                                    },
                                    "controller": {
                                        "type": "string",
                                        "example": "Users"
                                    },
                                    "action": {
                                        "type": "string",
                                        "example": "CheckToken"
                                    },
                                    "message": {
                                        "type": "string",
                                        "example": "Token verificado com sucesso."
                                    },
                                    "result": {
                                        "type": "string",
                                        "example": "JWToken"
                                    }
                                }
                            }
                        }
                    }
                },
                "401": {
                    "description": "Unauthorized",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Response401"
                            }
                        }
                    }
                },
                "500": {
                    "description": "Falha ao realizar a requisição.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Response500"
                            }
                        }
                    }
                }
            }
        }
    },
    "/user/edit": {
        "put": {
            "summary": "User Edit",
            "description": "Essa rota é responsável por editar um usuário.",
            "tags": ["Users"],
            "security": [{ "bearerAuth": [] }],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
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
                }
            },
            "responses": {
                "200": {
                    "description": "Usuário editado com sucesso.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties":{
                                    "success": {
                                        "type": "boolean",
                                        "example": "true"
                                    },
                                    "controller": {
                                        "type": "string",
                                        "example": "Users"
                                    },
                                    "action": {
                                        "type": "string",
                                        "example": "EditUsers"
                                    },
                                    "message": {
                                        "type": "string",
                                        "example": "Usuário editado com sucesso"
                                    },
                                    "result": {
                                        "type": "null",
                                        "example": "null"
                                    }
                                }
                            }
                        }
                    }
                },
                "401": {
                    "description": "Unathorized.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Response401"
                            }
                        }
                    }
                },
                "422": {
                    "description": "Falha na validação do payload da requisição.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Response422"
                            }
                        }
                    }
                },
                "500": {
                    "description": "Falha ao realizar requisição.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Response500"
                            }
                        }
                    }
                },
            }
        }
    },
    "user/list": {
        "get": {
            "summary": "User List",
            "description": "Essa rota retorna todos os usuários.",
            "tags": ["Users"],
            "security": [{ "bearerAuth": [] }],
            "responses": {
                "200": {
                    "description": "Lista de usuários retornada com sucesso.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "success": {
                                        "type": "boolean",
                                        "example": "true"
                                    },
                                    "controller": {
                                        "type": "string",
                                        "example": "Users"
                                    },
                                    "action": {
                                        "type": "string",
                                        "example": "ListUser"
                                    },
                                    "message": {
                                        "type": "string",
                                        "example": "Token verificado com sucesso."
                                    },
                                    "result": {
                                        "type": "array",
                                        "items":{
                                            "type": "object",
                                            "properties": {
                                                "schema": {
                                                    "$ref": "#/components/schemas/UserModel"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Falha ao realizar a requisição",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Response500"
                            }
                        }
                    }
                },
            }
        }
    },
    "/user/delete": {
        "delete": {
            "summary": "Delete User",
            "description": "Essa rota deleta usários.",
            "tags": ["Users"],
            "security": [{ "bearerAuth": [] }],
            "responses":{
                "200": {
                    "description": "Usuário deletado com sucesso.",
                    "content": {
                        "application/json":{
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "sucess": {
                                        "type": "boolean",
                                        "example": "true"
                                    },
                                    "controller": {
                                        "type": "string",
                                        "example": "Users"
                                    },
                                    "action": {
                                        "type": "string",
                                        "example": "DeleteUser"
                                    },
                                    "message": {
                                        "type": "string",
                                        "example": "Usuário deletado com sucesso"
                                    },
                                    "result": {
                                        "type": "null", 
                                        "example": "null"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "Usuário não encontrado.",
                    "content": {
                        "application/json":{
                            "schema": {
                                "$ref": "#/components/schemas/Response404"
                            }
                        }
                    }
                },
                "500": {
                    "description": "Falha ao realizar a requisição",
                    "content": {
                        "application/json":{
                            "schema": {
                                "$ref": "#/components/schemas/Response500"
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = {
    userPaths,
}