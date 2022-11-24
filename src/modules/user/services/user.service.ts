import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { UserPayload } from "../models/user.payload";
import { UserProxy } from "../models/user.proxy";
import * as bcryptjs from "bcryptjs";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
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

  public async create(payload: UserPayload): Promise<UserEntity> {
    const user = new UserEntity();

    user.email = payload.email;
    user.name = payload.name;
    user.imageUrl = payload.imageUrl;

    const salt = await bcryptjs.genSalt();
    user.password = await bcryptjs.hash(payload.password, salt);

    user.isActive = payload.isActive;

    return await this.usersRepository.save(user);
  }

  public async update(payload: UserPayload, id: number): Promise<UserProxy> {
    const oldEntity = await this.usersRepository.findOneBy({ id });

    const user = new UserEntity();

    user.email = payload.email;
    user.name = payload.name;
    user.imageUrl = payload.imageUrl;
    user.password = payload.password;
    user.isActive = payload.isActive;

    const entity = {
      ...oldEntity,
      ...user
    };

    return await this.usersRepository.save(entity);
  }
}
