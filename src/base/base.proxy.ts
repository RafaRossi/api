import { BaseEntity } from "./base.entity";
import { ApiProperty } from "@nestjs/swagger";

export class BaseProxy {

  constructor(entity: BaseEntity) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }

  @ApiProperty()
  public id: number;

  @ApiProperty()
  public createdAt: Date;

  @ApiProperty()
  public updatedAt: Date;

}
