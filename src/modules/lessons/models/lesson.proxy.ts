import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { LessonEntity } from '../entities/lesson.entity';
import { BaseProxy } from "../../../base/base.proxy";
import { CourseModuleProxy } from "../../course-modules/models/course-module.proxy";

export class LessonProxy extends BaseProxy {
  constructor(entity: LessonEntity) {
    super(entity);
    this.title = entity.title;
    this.description = entity.description;
    this.videoUrl = entity.videoUrl;
    this.courseModuleId = entity.courseModuleId;
    this.courseModule = entity.courseModule ? new CourseModuleProxy(entity.courseModule) : undefined;
  }

  @ApiProperty()
  public title: string;

  @ApiProperty()
  public description?: string;

  @ApiProperty()
  public videoUrl: string;

  @ApiProperty()
  public courseModuleId: number;

  @ApiPropertyOptional({ type: CourseModuleProxy })
  public courseModule?: CourseModuleProxy;
}
