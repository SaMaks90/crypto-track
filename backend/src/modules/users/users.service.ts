import { Injectable } from '@nestjs/common';

export interface IUser {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: Array<IUser> = [
    { id: 1, email: '1111@gmail.com', password: '1111' },
    { id: 2, email: '2222@gmail.com', password: '2222' },
  ];

  async findOne(email: string): Promise<IUser | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
