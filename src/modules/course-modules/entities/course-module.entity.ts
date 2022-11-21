import { CourseEntity } from "src/modules/course/entities/course.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LessonEntity } from "../../lessons/entities/lesson.entity";

@Entity()
export class CourseModuleEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public courseId: number;

    @ManyToOne(() => CourseEntity, course => course.modules)
    public course?: CourseEntity;

    @OneToMany(() => LessonEntity, lesson => lesson.courseModule)
    public lessons?: LessonEntity;

}
