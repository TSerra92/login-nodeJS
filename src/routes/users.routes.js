const userController = require("../controllers/users.controllers")
const jwtMiddleware = require("../middlewares/jwt.middlewares")


class UsersRoutes{
    constructor(routes){
        this.routes = routes
    }
    init(){
        /**
         * @swagger
         * /user/register:
         *  post:
         *      summary: Cadastro de usuário
         *      description: Essa rota é responsável por cadastrar um novo usuário.
         *      tags: [Users]
         *      requestBody: 
         *          content:
         *              application/json:
         *                  schema:
         *                      $ref: '#/components/schemas/User'
         *                  examples:
         *                      user:
         *                          value:
         *                              name: João
         *                              cpf: 000.000.000-00
         *                              email: joao@exemplo.com
         *                              pass: senha123
         *                              pass2: senha123
         *                              dob: 01/01/2022
         *                              tel: (11) 5555-5555
         *                              photo: 1649424642236.jpg
         *      responses:  
         *          201:
         *              description: Sucesso ao criar o usuário
         *              content:
         *                  application/json:
         *                      schema:
         *                          type: object
         *                          properties:
         *                              success:
         *                                  type: boolean
         *                              message:
         *                                  type: string
         *                              result:
         *                                  type: string
         *
         *          500:
         *              description: Falha ao criar o usuário
         *              content:
         *                  application/json:
         *                      schema:
         *                          type: object
         *                          properties:
         *                              sucess:
         *                                  type: boolean
         *                              message:
         *                                  type: string
         *                              result:
         *                                  type: string
         *          422:
         *              description: O e-mail informado já possui cadastro!
         *              content:
         *                  application/json:
         *                      schema:
         *                          type: object
         *                          properties:
         *                              sucess:
         *                                  type: boolean
         *                              message:
         *                                  type: string
         *                             
         *                          
         *                      
         */
        this.routes.post("/user/register", userController.registerUser),
        /**
         * @swagger
         * /user/login:
         *  post:
         *      summary: Login de Usuário
         *      description: Essa rota faz o login do usuário.
         *      tags: [Users]
         *      requestBody:
         *          content:
         *              application/json:
         *              schema:
         *                  $ref: '#/components/schemas/User'
         *              examples:
         *                  user:
         *                      value:
         *                          email: email@email.com
         *                          senha: senha
         * 
         *      responses:
         *          200:
         *              description: Sucesso ao fazer o login.
         *              content:
         *                  application/json:
         *                      schema:
         *                          type: object
         *                          properties:
         *                              success:
         *                                  type: boolean
         * 
         * 
         * 
         * 
         * 
         */
        this.routes.post("/user/login", userController.loginUser),
        this.routes.get("/user/checktoken", userController.checkToken),
        this.routes.get("/user/list", userController.listUsers),
        this.routes.put("/user/edit", jwtMiddleware.checkToken, userController.editUser),
        this.routes.delete("/user/delete", jwtMiddleware.checkToken, userController.deleteUser)

            /**
             * @swagger
             * components:
             *  schemas:
             *      User:
             *          type: object
             *          properties:
             *              name:
             *                  type: string
             *              cpf:
             *                  type: string
             *              email:
             *                  type: string
             *              password:
             *                  type: string
             *              confirmpassword:
             *                  type: string
             *              birthDate:
             *                  type: string
             *              phone:
             *                  type: string
             *              image:
             *                  type: string
             */
    }

}



module.exports = UsersRoutes