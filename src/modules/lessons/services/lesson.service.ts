import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entity, Repository } from 'typeorm';
import { LessonEntity } from '../entities/lesson.entity';
import { LessonPayload } from '../models/lesson.payload';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private repository: Repository<LessonEntity>,
  ) {}

  public async getRepository(): Promise<Repository<LessonEntity>> {
    return this.repository;
  }

  public async findAll(): Promise<LessonEntity[]> {
    return await this.repository.find();
  }

  public async findOne(id: number): Promise<LessonEntity> {
    return await this.repository.findOneBy({ id });
  }

  public async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  public async create(payload: LessonPayload): Promise<LessonEntity> {
    const course = new LessonEntity();

    course.title = payload.title;
    course.courseModuleId = payload.courseModuleId;

    return await this.repository.save(course);
  }

  public async update(payload: LessonPayload, id: number): Promise<LessonEntity> {
    const oldEntity = await this.repository.findOneBy({ id });

    const lesson = new LessonEntity();
    
    lesson.title = payload.title;

    const entity = {
      ...oldEntity,
      ...lesson,
    }

    return await this.repository.save(entity);
  }
}
