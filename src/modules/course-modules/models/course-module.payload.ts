import { ApiProperty } from "@nestjs/swagger";

export class CourseModulePayload {

  @ApiProperty()
  public title: string;

  @ApiProperty()
  public courseId: number;

}
