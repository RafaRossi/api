import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserPayload } from '../models/user.payload';
import { UserProxy } from '../models/user.proxy';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  public getRepository(): Repository<UserEntity> {
    return this.usersRepository;
  }

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<UserEntity> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  public async postUser(payload: UserPayload): Promise<UserEntity> {
    const user = new UserEntity();

    user.email = payload.email;
    user.name = payload.name;
    user.birthday = payload.birthday;
    user.password = payload.password;
    user.isActive = payload.isActive;

    return await this.usersRepository.save(user);
  }
}