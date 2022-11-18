import { CourseEntity } from "src/modules/course/entities/course.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CourseModuleEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @ManyToOne(() => CourseEntity, course => course.modules)
    public course?: CourseEntity;

}