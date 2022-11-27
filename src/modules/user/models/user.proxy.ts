import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { UserEntity } from "../entities/user.entity";
import { BaseProxy } from "../../../base/base.proxy";
import { RolesEnum } from "./roles.enum";

export class UserProxy extends BaseProxy {

  constructor(
    entity: UserEntity
  ) {
    super(entity);
    this.name = entity.name;
    this.email = entity.email;
    this.imageUrl = entity.imageUrl;
    this.isActive = entity.isActive;
    this.roles = entity.roles;
  }

  @ApiProperty()
  public name: string;

  @ApiProperty()
  public email: string;

  @ApiPropertyOptional()
  public imageUrl?: string;

  @ApiProperty()
  public isActive: boolean;

  @ApiProperty({ type: String, isArray: true })
  public roles: RolesEnum[];
}
