import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Body,
  Get,
  Request,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public } from "../../common/decorators/public";
import { SignInDto, SignUpDto } from "./dto/auth.dto";
import { IAccessToken, IRequestWithUser } from "./interfaces/auth.interface";
import { IUserWithoutPassword } from "../users/interfaces/users.interface";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post("login")
  signIn(@Body() signInDto: SignInDto): Promise<IAccessToken> {
    return this.authService.signIn(signInDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Public()
  @Post("signup")
  signUp(@Body() signUpDto: SignUpDto): Promise<IUserWithoutPassword> {
    return this.authService.signUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get("profile")
  getProfile(@Request() req: IRequestWithUser): IUserWithoutPassword {
    return req.user;
  }
}
