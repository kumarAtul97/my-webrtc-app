import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 9163982800,
      password: 'changeme',
    },
    {
      userId: 2,
      username: 9073461096,
      password: 'guess',
    },
  ];

  async findOne(username: number): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}