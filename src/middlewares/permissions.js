const { restart } = require("nodemon")
const repositories = require("../repositories/index.repositories")
const jwtHelper = require("../helpers/jwt.helpers")

const can = (permissionsRoute) => {
    return async (req, res, next) => {
        try{
            const { userId } = req.body

            const findUser = await repositories.findOne("Users", {where: {id: userId}, include: [{association: "Permissions"}]})

            if(!findUser){
                return res.status({
                    httpCode: 404, 
                    success: false,
                    controller: 'PermissionsMiddleware',
                    action: 'PermissionsMiddleware',
                    message: 'Usuário não encontrado',
                    result: null
                }) 
            }

            console.log("teste", findUser.dataValues)

            const permisionExist = findUser.Permissions
                .map(permission => permission.name)
                .some(permission => permissionsRoute.includes(permission));

            next()

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'PermissionsMiddleware',
                action: 'PermissionsMiddleware',
                message: "Acesso negado.",
                result: `${err}`
            })
        }
    }
}

const is = (rolesRoute) => {
    return async (req, res, next) => {
        try{
            const { userId } = req.body
            const findUser = await repositories.findOne("Users", {where: {id: userId}, include: [{association: "Roles"}]})

            if(!findUser){
                return res.status({
                    httpCode: 404, 
                    success: false,
                    controller: 'PermissionsMiddleware',
                    action: 'PermissionsMiddleware',
                    message: 'Usuário não encontrado',
                    result: null
                }) 
            }
            const rolesExist = findUser.Roles
                .map(roles => roles.name)
                .some(roles => rolesRoute.includes(roles));

            next()

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'PermissionsMiddleware',
                action: 'PermissionsMiddleware',
                message: "Acesso negado.",
                result: `${err}`
            })
        }
    }
}


const RolesPermissionsCheck = (permissionRoute) => {
    return async (req, res, next) => {
        try{
            const token = await jwtHelper.getToken(req)

            if(!token){
                return res.status(401).send({
                    success: false,
                    controller: "PermissionsMiddleware",
                    action: "RolesPermissionsCheck",
                    message: "Token de autorização inválido",
                    result: null
                })
            }

            const userFound = await jwtHelper.verifyToken(token)
            const findUser = await repositories.findOne(
                "Users",
                 {where: {id: userFound.id},
                  include: [{association: "Roles", 
                  include: [{association: "Permissions"}]}, 
                  {association: "Permissions"}]
                })

            if(!findUser){
                return res.status(404).send({
                    success: false,
                    controller: "PermissionsMiddleware",
                    action: "RolesPermissionsCheck",
                    message: "Usuário não encontrado",
                    result: null
                })
            }

            let permissionExist = []

            findUser.Permissions.map((permission) => {
                if(permissionRoute.includes(permission.name)){
                    permissionExist.push(permission)
                }
            })

            findUser.Roles.map((role) => {
                role.Permissions.map((permission)=>{
                    if(permission.name.includes(permissionRoute)){
                        permissionExist.push(permission)
                    }
                })
            })

            if(permissionExist.length <= 0){
                return res.status(401).send({
                    success: false,
                    controller: "PermissionsMiddleware",
                    action: "RolesPermissionsCheck",
                    message: "Usuário não tem autorização.",
                    result: null
                })
            }

            next()

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'PermissionMiddleware',
                action: 'RolesPermissionsCheck',
                message: "Acesso negado.",
                result: `${err}`
            })
        }
    }
}






module.exports = {can, is, RolesPermissionsCheck}