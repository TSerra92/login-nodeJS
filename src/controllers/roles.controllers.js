const rolesServices = require("../services/roles.services")

module.exports = class RolesController{
    static async registerRole(req, res){
        try{

            const result = await rolesServices.registerRole(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Roles',
                action: 'RegisterRole',
                message: "Falha ao realizar a requisição.",
                result: `${err}`
            })
        }
    }

    static async listRoles(req, res){
        try{

            const result = await rolesServices.listRoles(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Roles',
                action: 'ListRoles',
                message: "Falha ao realizar a requisição.",
                result: `${err}`
            })
        }
    }

    static async editRole(req, res){
        try{

            const result = await rolesServices.editRole(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Roles',
                action: 'EditRole',
                message: "Falha ao realizar a requisição.",
                result: `${err}`
            })
        }
    }
    
    static async deleteRole(req,res){
        try{
            const result = await rolesServices.deleteRole(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Roles',
                action: 'DeleteRole',
                message: "Falha ao realizar a requisição.",
                result: `${err}`
            })
        }
    }

    static async registerRolesPermissions(req, res){
        try{
            const result = await rolesServices.registerRolesPermissions(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)
        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Roles',
                action: 'RegisterRolesPermissions',
                message: "Falha ao realizar a requisição.",
                result: `${err}`
            })
        }
    }
    
}