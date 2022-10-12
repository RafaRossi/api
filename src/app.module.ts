import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port:  5432,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
