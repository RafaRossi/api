import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LessonService } from "../../lessons/services/lesson.service";
import { CourseModuleEntity } from "../entities/course-module.entity";
import { CourseModulePayload } from "../models/course-module.payload";

@Injectable()
export class CourseModuleService {
  constructor(
    @InjectRepository(CourseModuleEntity)
    private repository: Repository<CourseModuleEntity>,
    private readonly lessonService: LessonService
  ) {}

  public getRepository(): Repository<CourseModuleEntity> {
    return this.repository;
  }

  public async findAll(): Promise<CourseModuleEntity[]> {
    return await this.repository.find({
      join: {
        alias: "module",
        leftJoinAndSelect: {
          lessons: "module.lessons"
        }
      }
    });
  }

  public async findOne(id: number): Promise<CourseModuleEntity> {
    return await this.repository.findOne({
      where: { id },
      join: {
        alias: "module",
        leftJoinAndSelect: {
          modules: "module.lessons"
        }
      }
    });
  }

  public async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  public async create(payload: CourseModulePayload): Promise<CourseModuleEntity> {
    const course = new CourseModuleEntity();

    course.title = payload.title;
    course.courseId = payload.courseId;

    if (payload.lessons)
      await this.lessonService.createMany(payload.lessons);

    return await this.repository.save(course);
  }

  public async createMany(payload: CourseModulePayload[]): Promise<CourseModuleEntity[]> {
    const coursesEntity = [];

    for await (const coursePayload of payload) {
      const course = new CourseModuleEntity();

      course.title = coursePayload.title;
      course.courseId = coursePayload.courseId;

      coursesEntity.push(course);

      if (coursePayload.lessons)
        await this.lessonService.createMany(coursePayload.lessons);
    }

    return await this.repository.save(coursesEntity);
  }

  public async update(payload: CourseModulePayload, id: number): Promise<CourseModuleEntity> {
    const oldEntity = await this.repository.findOneBy({ id });

    const course = new CourseModuleEntity();

    course.title = payload.title;

    const entity = {
      ...oldEntity,
      ...course
    };

    return await this.repository.save(entity);
  }
}
