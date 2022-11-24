import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { LessonPayload } from "../../lessons/models/lesson.payload";

export class CourseModulePayload {

  @ApiProperty()
  public title: string;

  @ApiProperty()
  public courseId: number;

  @ApiProperty()
  @Type(() => LessonPayload)
  public lessons: LessonPayload[];

}
