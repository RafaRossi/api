import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from "../../../base/base.entity";

@Entity()
export class UserEntity extends BaseEntity {
  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column()
  public name: string;

  @Column()
  public imageUrl: string;

  @Column({ default: true })
  public isActive: boolean;
}
