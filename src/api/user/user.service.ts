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
    user.user_cnr_id = body.user_cnr_id;
    user.password = body.password;
    user.country = body.country;
    user.address = body.address;
    user.phone = body.phone;
    user.municipality = body.municipality;
    body.role ? (user.role = body.role) : null;
    body.documents ? (user.documents = body.documents) : null;
    body.address2 ? (user.address2 = body.address2) : null;
    body.token ? (user.token = body.token) : null;
    body.properties ? (user.properties = body.properties) : null;
    body.histories ? (user.histories = body.histories) : null;

    return this.repository.save(user);
  }

  public async updateUser(id: any, body: CreateUserDto): Promise<User> {
    const user = await this.repository
      .findOne({ where: { id: id } })
      .then((user) => user);

    body.name ? (user.name = body.name) : null;
    body.email ? (user.email = body.email) : null;
    body.role ? (user.role = body.role) : null;
    user.user_cnr_id = body.user_cnr_id;
    body.user_cnr_id ? (user.user_cnr_id = body.user_cnr_id) : null;
    body.password ? (user.password = body.password) : null;
    body.country ? (user.country = body.country) : null;
    body.address ? (user.address = body.address) : null;
    body.phone ? (user.phone = body.phone) : null;
    body.documents ? (user.documents = body.documents) : null;
    body.address2 ? (user.address2 = body.address2) : null;
    body.token ? (user.token = body.token) : null;
    body.properties ? (user.properties = body.properties) : null;
    body.histories ? (user.histories = body.histories) : null;
    body.municipality ? (user.municipality = body.municipality) : null;
    body.isDeleted ? (user.isDeleted = body.isDeleted) : null;
    user.updatedAt = new Date();

    return this.repository.save(user);
  }
}
