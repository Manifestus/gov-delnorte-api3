import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get('/:id')
  public async getUser(@Param('id') id: any): Promise<User> {
    console.log('id', id);
    return this.service.getUser(id);
  }

  @Get()
  public async getUsers(): Promise<User[]> {
    return this.service.getUsers();
  }

  @Post()
  public async createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.service.createUser(body);
  }

  @Patch('/:id')
  public async updateProperty(
    @Param('id') id: string,
    @Body() body: CreateUserDto,
  ): Promise<User> {
    return this.service.updateUser(id, body);
  }
}
