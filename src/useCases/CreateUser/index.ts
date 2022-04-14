import { CreateUserController } from './CreateUserController';
import PrismaUsersRepository from "../../repositories/implementations/PrismaUsersRepository"; 
import prisma from "../../repositories/implementations/PrismaClient";
import CreateUserUseCase from './CreateUserUseCase';
import JsonWebToken from '../../helpers/JwtGenerator/JsonWebToken';

const prismaUsersRepository = new PrismaUsersRepository(prisma);
const token = new JsonWebToken();
const createUserUseCase = new CreateUserUseCase(prismaUsersRepository);
const createUserController = new CreateUserController(createUserUseCase, token);

export { createUserUseCase, createUserController };
