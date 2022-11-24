import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LessonModule } from "../lessons/lesson.module";
import { CourseModuleController } from "./controllers/course-module.controller";
import { CourseModuleEntity } from "./entities/course-module.entity";
import { CourseModuleService } from "./services/course-module.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([CourseModuleEntity]),
    LessonModule
  ],
  providers: [
    CourseModuleService
  ],
  controllers: [CourseModuleController],
  exports: [
    CourseModuleService
  ]
})
export class CourseModuleModule {}
