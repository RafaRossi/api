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
      password: '123456',
      database: '',
      username: 'postgres',
      port: 5432,
      autoLoadEntities: true,
      synchronize: true,
      logging: false,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        }
      },
    })],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
