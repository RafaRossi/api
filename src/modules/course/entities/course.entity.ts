import { CourseModuleEntity } from 'src/modules/course-modules/entities/course-module.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from "../../../base/base.entity";

@Entity()
export class CourseEntity extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public author: string;

  @Column()
  public category: string;

  @Column()
  public imageUrl: string;

  @OneToMany(
    () => CourseModuleEntity,
    (module) => module.course,
  )
  public modules?: CourseModuleEntity[];
}
