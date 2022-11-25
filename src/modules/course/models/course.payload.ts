import { ApiProperty } from "@nestjs/swagger";

export class CoursePayload {

  @ApiProperty()
  public name: string;

  @ApiProperty()
  public description: string;

  @ApiProperty()
  public author: string;

  @ApiProperty()
  public category: string;

  @ApiProperty()
  public imageUrl: string;
}
