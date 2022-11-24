import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from './environment/environment';
import { AuthModule } from './modules/auth/auth.module';
import { CourseModuleModule } from './modules/course-modules/course-module.module';
import { CourseModule } from './modules/course/course.module';
import { LessonModule } from './modules/lessons/lesson.module';
import { UserController } from './modules/user/controllers/user.controller';
import { UsersModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://aws_liga_clube_afiliados_dev:3bc3ddd2ed8253446b00cc8a7366aa3f2180cd7eba9ea024126763a9f32ab6cee08efa5fc5d0b3d135b4b7c4c3aab8f3@awsligadev.cecox2p2ba08.sa-east-1.rds.amazonaws.com:5432/aws_liga_clube_afiliados_dev',
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
    AuthModule,
    CourseModuleModule,
    CourseModule,
    LessonModule,
    UsersModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
