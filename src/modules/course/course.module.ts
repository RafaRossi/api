import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './controllers/course.controller';
import { CourseEntity } from './entities/course.entity';
import { CourseService } from './services/course.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CourseEntity])
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