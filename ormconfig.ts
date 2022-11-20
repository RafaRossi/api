import { environment } from "src/environment/environment";


export = {
  host: environment.DB_HOST,
  type: environment.DB_TYPE,
  port: environment.DB_PORT,
  username: environment.DB_USER,
  password: environment.DB_PASSWORD,
  database: environment.DB_DATABASE,
  entities: [
    'src/**/**.entity{.ts,.js}',
  ],
  migrations: [
    'src/database/migrations/*.ts',
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  synchronize: false,
  logging: environment.DATABASE_LOGGING === 'true',
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    }
  },
};