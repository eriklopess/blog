import { CreateUserController } from './CreateUserController';
import PrismaUsersRepository from "../../repositories/implementations/PrismaUsersRepository"; 
import prisma from "../../repositories/implementations/PrismaClient";
import CreateUserUseCase from './CreateUserUseCase';

const prismaUsersRepository = new PrismaUsersRepository(prisma);

const createUserUseCase = new CreateUserUseCase(prismaUsersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
