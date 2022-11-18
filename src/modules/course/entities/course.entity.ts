import { CourseModuleEntity } from "src/modules/course-modules/entities/course-module.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CourseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;
    
    @Column()
    public description: string;

    @Column()
    public imageUrl: string;

    @OneToMany(() => CourseModuleEntity, module => module.course)
    public modules?: CourseModuleEntity[];

}