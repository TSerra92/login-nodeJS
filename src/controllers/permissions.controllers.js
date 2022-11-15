const rolesServices = require("../services/permissions.services")

module.exports = class PermissionsController{
    static async registerPermission(req, res){
        try{

            const result = await rolesServices.registerPermissions(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Permissions',
                action: 'RegisterPermission',
                message: "Falha ao realizar a requisição.",
                result: `${err}`
            })
        }
    }

    static async listPermissions(req, res){
        try{

            const result = await rolesServices.listPermissions(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)


        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Permissions',
                action: 'ListPermissions',
                message: "Falha ao realizar a requisição.",
                result: `${err}`
            })
        }
    }

    static async editPermission(req, res){
        try{
            const result = await rolesServices.editPermission(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Permissions',
                action: 'EditPermissions',
                message: "Falha ao realizar a requisição.",
                result: `${err}`
            })
        }
    }

    static async deletePermission(req, res){
        try{
            const result = await rolesServices.deletePermissions(req)

            const { ["httpCode"]:httpCode, ...response } = result

            return res.status(httpCode).send(response)

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Permissions',
                action: 'DeletePermissions',
                message: "Falha ao realizar a requisição.",
                result: `${err}`
            })
        }
    }
}