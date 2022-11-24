import { ApiProperty } from "@nestjs/swagger";
import { CourseEntity } from "../entities/course.entity";

export class CourseProxy {
  constructor(entity: CourseEntity) {
    this.id = entity.id;
    this.name = entity.name;
    this.description = entity.description;
    this.author = entity.author;
    this.category = entity.category;
    this.imageUrl = entity.imageUrl;
  }

  @ApiProperty()
  public id: number;

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
