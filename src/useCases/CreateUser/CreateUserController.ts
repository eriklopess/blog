import { Request, Response } from "express";
import JsonWebToken from "../../helpers/JwtGenerator/JsonWebToken";
import CreateUserUseCase from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase, private token: JsonWebToken ) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      await this.createUserUseCase.execute({
        email,
        password,
      });
      const tokenGenerated = this.token.generate(email);
      return response.status(201).json({ token: tokenGenerated });
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
