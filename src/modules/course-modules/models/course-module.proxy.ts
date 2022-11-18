import { ApiProperty } from "@nestjs/swagger";
import { CourseModuleEntity } from "../entities/course-module.entity";

export class CourseProxy {
    constructor(entity: CourseModuleEntity){
        this.title = entity.title;
    }

    @ApiProperty()
    public title: string;
}