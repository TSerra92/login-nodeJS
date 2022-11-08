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
                message: "Falha ao registrar cargo.",
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
                message: "Falha ao buscar tabela de cargos.",
                result: `${err}`
            })
        }
    }

}