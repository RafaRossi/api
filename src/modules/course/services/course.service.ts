import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CourseModuleService } from "../../course-modules/services/course-module.service";
import { CourseEntity } from "../entities/course.entity";
import { CoursePayload } from "../models/course.payload";
import { CourseProxy } from "../models/course.proxy";
import { BaseService } from "../../../base/base.service";

@Injectable()
export class CourseService extends BaseService<CourseEntity> {
  constructor(
    @InjectRepository(CourseEntity)
    repository: Repository<CourseEntity>,
    private readonly courseModuleService: CourseModuleService
  ) {
    super(repository);
  }

  public async findAll(name: string, category: string): Promise<CourseEntity[]> {
    return await this.repository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.modules', 'modules')
      .leftJoinAndSelect('modules.lessons', 'lessons')
      .where('course.name ILIKE :name', { name: '%' + name + '%' })
      .andWhere('course.category ILIKE :category', { category: '%' + category + '%' })
      .getMany();
  }

  public async findOne(id: number): Promise<CourseEntity> {
    return await this.repository.findOne({
      where: { id },
      join: {
        alias: "course",
        leftJoinAndSelect: {
          modules: "course.modules",
          lessons: "modules.lessons",
        }
      }
    });
  }

  public async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  public async create(payload: CoursePayload): Promise<CourseEntity> {
    const course = new CourseEntity();

    course.name = payload.name;
    course.imageUrl = payload.imageUrl;
    course.description = payload.description;
    course.author = payload.author;
    course.category = payload.category;

    return await this.repository.save(course);
  }

  public async update(payload: CoursePayload, id: number): Promise<CourseEntity> {
    const oldEntity = await this.repository.findOneBy({ id });

    const course = new CourseEntity();

    course.name = payload.name;
    course.imageUrl = payload.imageUrl;
    course.description = payload.description;
    course.author = payload.author;
    course.category = payload.category;

    const entity = {
      ...oldEntity,
      ...course
    };

    return await this.repository.save(entity);
  }
}
