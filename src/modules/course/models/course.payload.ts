import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { CourseModulePayload } from "../../course-modules/models/course-module.payload";

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
