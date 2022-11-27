import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from "../../../base/base.entity";
import { RolesEnum } from "../models/roles.enum";

@Entity()
export class UserEntity extends BaseEntity {
  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column()
  public name: string;

  @Column({ nullable: true })
  public imageUrl?: string;

  @Column({ default: true })
  public isActive: boolean;

  @Column({ type: 'simple-array' })
  public roles: RolesEnum[];
}
