import { CourseEntity } from 'src/modules/course/entities/course.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { LessonEntity } from '../../lessons/entities/lesson.entity';
import { BaseEntity } from "../../../base/base.entity";

@Entity()
export class CourseModuleEntity extends BaseEntity {
  @Column()
  public title: string;

  @Column()
  public courseId: number;

  @ManyToOne(() => CourseEntity, (course) => course.modules)
  public course?: CourseEntity;

  @OneToMany(() => LessonEntity, (lesson) => lesson.courseModule)
  public lessons?: LessonEntity;
}
