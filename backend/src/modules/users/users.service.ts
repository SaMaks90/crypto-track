import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { User, Prisma } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUserByEmail({
    email,
  }: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async getUserByEmailWithoutPassword({
    email,
  }: Prisma.UserWhereUniqueInput): Promise<Omit<User, "password"> | null> {
    return this.prisma.user.findUnique({
      where: { email },
      omit: { password: true },
    });
  }

  async createUser(
    data: Prisma.UserCreateInput,
  ): Promise<Omit<User, "password">> {
    return this.prisma.user.create({ data, omit: { password: true } });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<Omit<User, "password">> {
    return this.prisma.user.update({
      data: {
        ...params.data,
        updatedAt: new Date(),
      },
      where: params.where,
      omit: { password: true },
    });
  }

  async deleteUser({
    id,
  }: Prisma.UserWhereUniqueInput): Promise<Omit<User, "password">> {
    return this.prisma.user.delete({ where: { id }, omit: { password: true } });
  }

  async getAllUsers(): Promise<Omit<User, "password">[]> {
    return this.prisma.user.findMany({ omit: { password: true } });
  }
}
