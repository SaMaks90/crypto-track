import { Controller, Get, Delete, Param, Body, Patch } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Public } from "../../common/decorators/public";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Get("")
  getUserList(): Promise<Record<string, any>[]> {
    return this.usersService.getAllUsers();
  }

  @Delete(":id")
  deleteUser(@Param("id") id: number): Promise<Record<string, any>> {
    return this.usersService.deleteUser({ id: +id });
  }

  @Patch(":id")
  updateUser(
    @Param("id") id: number,
    @Body() updateUserDto: Record<string, any>,
  ): Promise<Record<string, any>> {
    return this.usersService.updateUser({
      where: { id: +id },
      data: updateUserDto,
    });
  }
}
