import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCourseController } from './controllers/user-course.controller';
import { UserCourseEntity } from './entities/user-course.entity';
import { UserCourseService } from './services/user-course.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserCourseEntity])
  ],
  providers: [
    UserCourseService
  ],
  controllers: [UserCourseController],
  exports: [
    UserCourseService
  ]
})
export class UserCourseModule {}
