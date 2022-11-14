const userController = require("../controllers/users.controllers")
const jwtMiddleware = require("../middlewares/jwt.middlewares")


class UsersRoutes{
    constructor(routes){
        this.routes = routes
    }
    init(){
        this.routes.post("/user/register", userController.registerUser),
        this.routes.post("/user/login", userController.loginUser),
        this.routes.get("/user/checktoken", userController.checkToken),
        this.routes.get("/user/list", userController.listUsers),
        this.routes.put("/user/edit", jwtMiddleware.checkToken, userController.editUser),
        this.routes.delete("/user/delete", jwtMiddleware.checkToken, userController.deleteUser)

    }

}



module.exports = UsersRoutes