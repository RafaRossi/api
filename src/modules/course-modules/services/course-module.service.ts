import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LessonService } from "../../lessons/services/lesson.service";
import { CourseModuleEntity } from "../entities/course-module.entity";
import { CourseModulePayload } from "../models/course-module.payload";
import { BaseService } from "../../../base/base.service";

@Injectable()
export class CourseModuleService extends BaseService<CourseModuleEntity> {

  constructor(
    @InjectRepository(CourseModuleEntity)
    repository: Repository<CourseModuleEntity>,
    private readonly lessonService: LessonService,
  ) {
    super(repository);
  }

  public async findAll(courseId: number): Promise<CourseModuleEntity[]> {
    return await this.repository.find({
      join: {
        alias: "module",
        leftJoinAndSelect: {
          lessons: "module.lessons"
        },
      },
      where: {
        courseId: courseId ? +courseId : undefined,
      },
      order: {
        createdAt: 'ASC',
      },
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

    return await this.repository.save(course);
  }

  public async createMany(payload: CourseModulePayload[]): Promise<CourseModuleEntity[]> {
    const coursesEntity = [];

    for await (const coursePayload of payload) {
      const course = new CourseModuleEntity();
      course.title = coursePayload.title;
      course.courseId = coursePayload.courseId;
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
