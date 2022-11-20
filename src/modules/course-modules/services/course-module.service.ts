import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entity, Repository } from 'typeorm';
import { CourseModuleEntity } from '../entities/course-module.entity';
import { CourseModulePayload } from '../models/course-module.payload';

@Injectable()
export class CourseModuleService {
  constructor(
    @InjectRepository(CourseModuleEntity)
    private repository: Repository<CourseModuleEntity>,
  ) {}

  public async getRepository(): Promise<Repository<CourseModuleEntity>> {
    return await this.repository;
  }

  public async findAll(): Promise<CourseModuleEntity[]> {
    return await this.repository.find();
  }

  public async findOne(id: number): Promise<CourseModuleEntity> {
    return await this.repository.findOneBy({ id });
  }

  public async remove(id: number): Promise<void> {
    await await this.repository.delete(id);
  }

  public async create(payload: CourseModulePayload): Promise<CourseModuleEntity> {
    const course = new CourseModuleEntity();

    course.title = payload.title;
    course.courseId = payload.courseId;

    return await this.repository.save(course);
  }

  public async update(payload: CourseModulePayload, id: number): Promise<CourseModuleEntity> {
    const oldEntity = await this.repository.findOneBy({id});

    const course = new CourseModuleEntity();
    
    course.title = payload.title;

    const entity = {
      ...oldEntity,
      ...course,
    }

    return await this.repository.save(entity);
  }
}