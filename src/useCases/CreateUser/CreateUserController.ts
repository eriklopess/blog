import { Request, Response } from "express";
import CreateUserUseCase from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      await this.createUserUseCase.execute({
        email,
        password,
      });

      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
