module.exports = class PermissionsController{
    static async registerPermission(req, res){
        try{

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