import { Controller, Get, Delete, Param, Body, Patch } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Public } from "../../common/decorators/public";
import { UpdateUserDto } from "./dto/users.dto";
import { ParseIntPipe } from "../../common/pipes/parse-int.pipe";
import { IUserWithoutPassword } from "./interfaces/users.interface";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Get("")
  getUserList(): Promise<IUserWithoutPassword[]> {
    return this.usersService.getAllUsers();
  }

  @Delete(":id")
  deleteUser(
    @Param("id", new ParseIntPipe()) id: number,
  ): Promise<IUserWithoutPassword> {
    return this.usersService.deleteUser({ id });
  }

  @Patch(":id")
  updateUser(
    @Param("id", new ParseIntPipe()) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<IUserWithoutPassword> {
    return this.usersService.updateUser({
      where: { id },
      data: updateUserDto,
    });
  }
}
