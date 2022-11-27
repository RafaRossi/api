import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CourseEntity } from "../entities/course.entity";
import { CourseModuleProxy } from "../../course-modules/models/course-module.proxy";

export class CourseProxy {
  constructor(entity: CourseEntity) {
    this.id = entity.id;
    this.name = entity.name;
    this.description = entity.description;
    this.author = entity.author;
    this.category = entity.category;
    this.imageUrl = entity.imageUrl;

    this.modules = entity.modules?.map(module => new CourseModuleProxy(module));
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

  @ApiPropertyOptional({ type: CourseModuleProxy, isArray: true })
  public modules?: CourseModuleProxy[];
}
