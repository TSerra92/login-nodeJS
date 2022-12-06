const userController = require('../controllers/users.controllers')
const jwtMiddleware = require('../middlewares/jwt.middlewares')
const acl = require('../middlewares/permissions')

class UsersRoutes{
    constructor(routes){
        this.routes = routes
    }
    init(){
        this.routes.post('/user/register',
            userController.registerUser
        ),

        this.routes.post('/user/login',
            userController.loginUser
        ),

        this.routes.get('/user/checktoken',
            userController.checkToken
        ),

        this.routes.get('/user/list',
            jwtMiddleware.checkToken,
            acl.RolesPermissionsCheck('list_users'), 
            userController.listUsers
        ),

        this.routes.put('/user/edit/own', 
            jwtMiddleware.checkToken,
            acl.RolesPermissionsCheck('edit_own_user'), 
            userController.editOwnUser
        ),

        this.routes.put('/user/edit/other',
            jwtMiddleware.checkToken,
            acl.RolesPermissionsCheck('edit_other_user'),
            userController.editOtherUser)

        this.routes.delete('/user/delete/own',
            jwtMiddleware.checkToken,
            acl.RolesPermissionsCheck('delete_own_user'), 
            userController.deleteOwnUser
        ),

        this.routes.delete('/user/delete/other',
        jwtMiddleware.checkToken,
        acl.RolesPermissionsCheck('delete_other_user'), 
        userController.deleteOtherUser
        ),

        this.routes.post('/user/rolespermissions', 
            jwtMiddleware.checkToken, 
            acl.RolesPermissionsCheck('define_acl_user'), 
            userController.registerUserRolesPermissions
            )
    }
}



module.exports = UsersRoutes