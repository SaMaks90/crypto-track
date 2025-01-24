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

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post("login")
  signIn(
    @Body() signInDto: Record<string, any>,
  ): Promise<{ access_token: string }> {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post("signup")
  signUp(@Body() signUpDto: Record<string, any>): Promise<Record<string, any>> {
    return this.authService.signUp(signUpDto);
  }

  @Get("profile")
  getProfile(@Request() req: any): Record<string, any> {
    return req.user;
  }
}
