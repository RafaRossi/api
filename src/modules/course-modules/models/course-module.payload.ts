import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { LessonPayload } from "../../lessons/models/lesson.payload";

export class CourseModulePayload {

  @ApiProperty()
  public title: string;

  @ApiProperty()
  public courseId: number;

}
