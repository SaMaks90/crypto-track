import { Request } from "express";
import { IUserWithoutPassword } from "../../users/interfaces/users.interface";

export interface IAccessToken {
  access_token: string;
}

export interface IAccessTokenWithUser extends IAccessToken {
  user: IUserWithoutPassword;
}

export interface IRequestWithUser extends Request {
  user: IUserWithoutPassword;
}
