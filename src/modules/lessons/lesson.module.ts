import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonController } from './controllers/lesson.controller';
import { LessonEntity } from './entities/lesson.entity';
import { LessonService } from './services/lesson.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([LessonEntity])
  ],
  providers: [
    LessonService
  ],
  controllers: [LessonController],
  exports: [
    LessonService
  ]
})
export class LessonModule {}
