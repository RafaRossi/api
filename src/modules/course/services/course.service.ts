import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CourseModuleService } from "../../course-modules/services/course-module.service";
import { CourseEntity } from "../entities/course.entity";
import { CoursePayload } from "../models/course.payload";
import { CourseProxy } from "../models/course.proxy";

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private repository: Repository<CourseEntity>,
    private readonly courseModuleService: CourseModuleService
  ) {}

  public async getRepository(): Promise<Repository<CourseEntity>> {
    return await this.repository;
  }

  public async findAll(): Promise<CourseEntity[]> {
    return await this.repository.find({
      join: {
        alias: "course",
        leftJoinAndSelect: {
          modules: "course.modules",
          'modules.lessons': "course.modules.lessons"
        }
      }
    });
  }

  public async findOne(id: number): Promise<CourseEntity> {
    return await this.repository.findOne({
      where: { id },
      join: {
        alias: "course",
        leftJoinAndSelect: {
          modules: "course.modules"
        }
      }
    });
  }

  public async remove(id: number): Promise<void> {
    await await this.repository.delete(id);
  }

  public async create(payload: CoursePayload): Promise<CourseProxy> {
    const course = new CourseEntity();

    course.name = payload.name;
    course.imageUrl = payload.imageUrl;
    course.description = payload.description;

    if (payload.module)
      await this.courseModuleService.createMany(payload.module);

    return await this.repository.save(course);
  }

  public async update(payload: CoursePayload, id: number): Promise<CourseEntity> {
    const oldEntity = await this.repository.findOneBy({ id });

    const course = new CourseEntity();

    course.name = payload.name;
    course.imageUrl = payload.imageUrl;
    course.description = payload.description;

    const entity = {
      ...oldEntity,
      ...course
    };

    return await this.repository.save(entity);
  }
}
