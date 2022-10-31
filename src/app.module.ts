import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from './environment/environment';
import { AuthModule } from './modules/auth/auth.module';
import { CourseModule } from './modules/course/course.module';
import { UserController } from './modules/user/controllers/user.controller';
import { UsersModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: environment.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      logging: environment.DATABASE_LOGGING === 'true',
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        }
      },
    }),
  UsersModule,
  CourseModule,
  AuthModule
],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
