import { ApiProperty } from "@nestjs/swagger";
import { CourseModuleEntity } from "../entities/course-module.entity";

export class CourseModuleProxy {
    constructor(entity: CourseModuleEntity){
        this.title = entity.title;
        this.courseId = entity.courseId
    }

    @ApiProperty()
    public title: string;

    @ApiProperty()
    public courseId: number;
}