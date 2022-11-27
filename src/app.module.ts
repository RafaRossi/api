import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { environment } from './environment/environment';
import { CourseModuleModule } from './modules/course-modules/course-module.module';
import { CourseModule } from './modules/course/course.module';
import { LessonModule } from './modules/lessons/lesson.module';
import { UserModule } from './modules/user/user.module';
import { AuthTokenModule } from "./modules/auth/auth-token.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: environment.DB_URL,
      // port: +environment.DB_PORT,
      // host: environment.DB_HOST,
      // username: environment.DB_USER,
      // password: environment.DB_PASSWORD,
      // database: environment.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      logging: environment.DATABASE_LOGGING === 'true',
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        },
      },
    }),
    AuthTokenModule,
    CourseModuleModule,
    CourseModule,
    LessonModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
