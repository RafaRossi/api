import { ApiProperty } from "@nestjs/swagger";
import { CourseModuleEntity } from "../../course-modules/entities/course-module.entity";
import { CourseModulePayload } from "../../course-modules/models/course-module.payload";
import { LessonPayload } from "../../lessons/models/lesson.payload";

export class CoursePayload {

    @ApiProperty()
    public name: string;
    
    @ApiProperty()
    public description: string;

    @ApiProperty()
    public imageUrl: string;

    @ApiProperty()
    public module: CourseModulePayload[];
}
