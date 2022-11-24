import { ApiProperty } from "@nestjs/swagger";
import { LessonPayload } from "../../lessons/models/lesson.payload";

export class CourseModulePayload {

    @ApiProperty()
    public title: string;

    @ApiProperty()
    public courseId: number;

    @ApiProperty()
    public lessons: LessonPayload[];
    
}
