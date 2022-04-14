import { Request, Response, Router } from "express";
import token from "./middlewares/token";
import validator from "./middlewares/validator";
import { createUserController } from "./useCases/CreateUser";
import CreateUserJoiSchema from "./useCases/CreateUser/CreateUserJoiSchema";

const router = Router();

router.post("/user", token, validator(CreateUserJoiSchema), (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export default router;
