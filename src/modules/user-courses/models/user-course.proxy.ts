import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { UserCourseEntity } from '../entities/user-course.entity';
import { BaseProxy } from "../../../base/base.proxy";
import { UserProxy } from "../../user/models/user.proxy";
import { CourseProxy } from "../../course/models/course.proxy";

export class UserCourseProxy extends BaseProxy {
  constructor(entity: UserCourseEntity) {
    super(entity);
    this.userId = entity.userId;
    this.courseId = entity.courseId;
    this.user = entity.user ? new UserProxy(entity.user) : undefined;
    this.course = entity.course ? new CourseProxy(entity.course) : undefined;
  }

  @ApiProperty()
  public userId: number;

  @ApiProperty()
  public courseId: number;

  @ApiPropertyOptional({ type: UserProxy })
  public user?: UserProxy;

  @ApiPropertyOptional({ type: CourseProxy })
  public course?: CourseProxy;
}
