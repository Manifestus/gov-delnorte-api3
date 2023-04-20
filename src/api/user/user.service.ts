import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public async getUsers(): Promise<User[]> {
    return this.repository.find();
  }

  public async getUser(id: 'uuid'): Promise<User> {
    return this.repository.findOne({ where: { id: id, isDeleted: false } });
  }

  public async createUser(body: CreateUserDto): Promise<User> {
    const user: User = new User();

    user.name = body.name;
    user.email = body.email;
    user.role = body.role;

    body.documents ? (user.documents = body.documents) : null;

    return this.repository.save(user);
  }

  public async updateProperty(id: any, body: CreateUserDto): Promise<User> {
    const user = await this.repository
      .findOne({ where: { id: id } })
      .then((user) => user);

    body.name ? (user.name = body.name) : null;
    body.email ? (user.email = body.email) : null;
    body.role ? (user.role = body.role) : null;
    body.documents ? (user.documents = body.documents) : null;
    body.isDeleted ? (user.isDeleted = body.isDeleted) : null;
    user.updatedAt = new Date();

    return this.repository.save(user);
  }
}
