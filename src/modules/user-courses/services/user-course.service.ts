import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserCourseEntity } from "../entities/user-course.entity";
import { UserCoursePayload } from "../models/user-course.payload";
import { BaseService } from "../../../base/base.service";

@Injectable()
export class UserCourseService extends BaseService<UserCourseEntity> {

  constructor(
    @InjectRepository(UserCourseEntity)
    repository: Repository<UserCourseEntity>
  ) {
    super(repository);
  }

  public async findAll(userId: number): Promise<UserCourseEntity[]> {
    return await this.repository.find({ where: { userId } });
  }

  public async findOne(id: number): Promise<UserCourseEntity> {
    return await this.repository.findOneBy({ id });
  }

  public async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  public async create(payload: UserCoursePayload): Promise<UserCourseEntity> {
    const entity = await this.repository.findOneBy({
      userId: payload.userId,
      courseId: payload.courseId,
    });

    if (entity)
      return entity;

    const course = new UserCourseEntity();

    course.userId = payload.userId;
    course.courseId = payload.courseId;

    return await this.repository.save(course);
  }
}
