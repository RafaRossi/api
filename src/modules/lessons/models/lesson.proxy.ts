import { ApiProperty } from '@nestjs/swagger';
import { LessonEntity } from '../entities/lesson.entity';

export class LessonProxy {
    constructor(entity: LessonEntity) {
        this.title = entity.title;
        this.courseModuleId = entity.courseModuleId
    }

    @ApiProperty()
    public title: string;

    @ApiProperty()
    public courseModuleId: number;
}
