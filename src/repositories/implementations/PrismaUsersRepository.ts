import { IUsersRepository } from '../IUsersRepository';
import { PrismaClient } from "@prisma/client";
import { User } from '../../entities/User';

export default class PrismaUsersRepository implements IUsersRepository{
  constructor(private database: PrismaClient) {
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.database.user.findUnique({ where: {
      email: email
    } })
    return user;
  }
  async save(user: User): Promise<void> {
    await this.database.user.create({ data: { ...user } });
  }
}