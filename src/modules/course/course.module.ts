import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModuleModule } from "../course-modules/course-module.module";
import { LessonModule } from "../lessons/lesson.module";
import { CourseController } from './controllers/course.controller';
import { CourseEntity } from './entities/course.entity';
import { CourseService } from './services/course.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CourseEntity]),
    CourseModuleModule,
  ],
  providers: [
    CourseService
  ],
  controllers: [CourseController],
  exports: [
    CourseService
  ],
})
export class CourseModule {}
