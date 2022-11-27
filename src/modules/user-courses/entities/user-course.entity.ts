import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from "../../../base/base.entity";
import { CourseEntity } from "../../course/entities/course.entity";
import { UserEntity } from "../../user/entities/user.entity";

@Entity()
export class UserCourseEntity extends BaseEntity {
  @Column()
  public courseId: number;

  @Column()
  public userId: number;

  @ManyToOne(() => CourseEntity)
  public course?: CourseEntity;

  @ManyToOne(() => UserEntity)
  public user?: UserEntity;
}
