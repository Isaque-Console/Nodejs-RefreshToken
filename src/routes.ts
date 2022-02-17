import { response, Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCases/createUser/createUserController";
import { RefreshTokenUserController } from "./useCases/refreshTokenUser/RefreshTokenUserController";

const router = Router();

// const createUserController = new CreateUserController();

router.post("/users", new CreateUserController().handle);
router.post("/login", new AuthenticateUserController().handle);
router.post("/refresh-token", new RefreshTokenUserController().handle);

router.get("/courses", ensureAuthenticated, (request, response) => {
    return response.json([
        {id:1, name: "nodejs"},
        {id:2, name: "reactjs"},
        {id:3, name: "reactnative"},
        {id:4, name: "flutter"},
        {id:5, name: "elixir"}
    ])
})

export { router }

