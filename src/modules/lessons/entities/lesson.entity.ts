import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CourseModuleEntity } from "../../course-modules/entities/course-module.entity";

@Entity()
export class LessonEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column({ nullable: true })
  public videoUrl?: string;

  @Column()
  public courseModuleId: number;

  @ManyToOne(() => CourseModuleEntity, (courseModule) => courseModule.lessons)
  public courseModule?: CourseModuleEntity;

}
