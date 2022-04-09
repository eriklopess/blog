import { Request, Response, Router } from "express";
import { createUserController, createUserUseCase } from "./useCases/CreateUser";

const router = Router();

router.post("/user", (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export default router;
