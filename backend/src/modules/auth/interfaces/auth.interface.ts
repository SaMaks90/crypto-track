import { Request } from "express";
import { IUserWithoutPassword } from "../../users/interfaces/users.interface";

export interface IAccessToken {
  access_token: string;
}

export interface IRequestWithUser extends Request {
  user: IUserWithoutPassword;
}
