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
                message: "Falha ao registrar a permição.",
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
                message: "Falha ao buscar lista de permições.",
                result: `${err}`
            })
        }
    }
}