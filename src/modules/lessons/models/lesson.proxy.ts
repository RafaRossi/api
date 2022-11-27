import { ApiProperty } from '@nestjs/swagger';
import { LessonEntity } from '../entities/lesson.entity';
import { BaseProxy } from "../../../base/base.proxy";

export class LessonProxy extends BaseProxy {
    constructor(entity: LessonEntity) {
        super(entity);
        this.title = entity.title;
        this.videoUrl = entity.videoUrl;
        this.courseModuleId = entity.courseModuleId
    }

    @ApiProperty()
    public title: string;

    @ApiProperty()
    public videoUrl: string;

    @ApiProperty()
    public courseModuleId: number;
}
