import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { getPasswordHash } from "../../utils/hashing";
import { isMathPassword } from "../../utils/hashing";
import { SignInDto, SignUpDto } from "./dto/auth.dto";
import {
  IUser,
  IUserWithoutPassword,
} from "../users/interfaces/users.interface";
import { IAccessToken } from "./interfaces/auth.interface";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<IAccessToken> {
    const { email, password } = signInDto;
    const user: IUser = await this.usersService.getUserByEmail({ email });

    if (await isMathPassword(user?.password, password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDto: SignUpDto): Promise<IUserWithoutPassword> {
    const data = {
      email: signUpDto.email,
      password: await getPasswordHash(signUpDto.password),
      updatedAt: new Date(),
    };

    return await this.usersService.createUser(data);
  }
}
