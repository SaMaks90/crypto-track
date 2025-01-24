import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { getPasswordHash } from "../../utils/hashing";
import { isMathPassword } from "../../utils/hashing";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.getUserByEmail({ email });

    if (await isMathPassword(user?.password, password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDto: Record<string, any>): Promise<Record<string, any>> {
    const data = {
      email: signUpDto.email,
      password: await getPasswordHash(signUpDto.password),
      updatedAt: new Date(),
    };

    return await this.usersService.createUser(data);
  }
}
