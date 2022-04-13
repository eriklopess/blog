import { Request, Response, Router } from "express";
import validator from "./middlewares/validator";
import { createUserController, createUserUseCase } from "./useCases/CreateUser";
import CreateUserJoiSchema from "./useCases/CreateUser/CreateUserJoiSchema";

const router = Router();

router.post("/user", validator(CreateUserJoiSchema), (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export default router;
