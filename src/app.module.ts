import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/controllers/user.controller';
import { UsersModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'test.db',
    autoLoadEntities: true,
    synchronize: true,
    }),
  UsersModule
],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
