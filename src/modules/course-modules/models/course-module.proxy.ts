import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CourseModuleEntity } from "../entities/course-module.entity";
import { BaseProxy } from "../../../base/base.proxy";
import { CourseProxy } from "../../course/models/course.proxy";
import { LessonProxy } from "../../lessons/models/lesson.proxy";

export class CourseModuleProxy extends BaseProxy {
  constructor(entity: CourseModuleEntity) {
    super(entity);

    this.title = entity.title;
    this.courseId = entity.courseId;
    this.course = entity.course ? new CourseProxy(entity.course) : undefined;
    this.lessons = entity.lessons?.map(lesson => new LessonProxy(lesson));
  }

  @ApiProperty()
  public title: string;

  @ApiProperty()
  public courseId: number;

  @ApiPropertyOptional({ type: CourseProxy })
  public course?: CourseProxy;

  @ApiPropertyOptional({ type: LessonProxy, isArray: true })
  public lessons?: LessonProxy[];
}
