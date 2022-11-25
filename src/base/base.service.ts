import { Repository } from "typeorm";
import { BaseEntity } from "./base.entity";

export abstract class BaseService<T extends BaseEntity> {

  constructor(
    protected repository: Repository<T>
  ) { }

  public getRepository(): Repository<T> {
    return this.repository;
  }

}
