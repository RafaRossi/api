import { ApiProperty } from "@nestjs/swagger";
import { LessonEntity } from "../entities/lesson.entity";

export class LessonProxy {
    constructor(entity: LessonEntity){
        this.title = entity.title;
        this.courseId = entity.courseId
    }

    @ApiProperty()
    public title: string;

    @ApiProperty()
    public courseId: number;
}
