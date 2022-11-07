




module.exports = class RolesController{
    static async registerRole(req, res){
        try{

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Roles',
                action: 'RegisterRole',
                message: "Falha ao registrar role.",
                result: `${err}`
            })
        }
    }


    static async listRoles(req, res){
        try{

        }catch(err){
            return res.status(500).send({
                success: false,
                controller: 'Roles',
                action: 'ListRoles',
                message: "Falha ao buscar tabela de roles.",
                result: `${err}`
            })
        }
    }

}