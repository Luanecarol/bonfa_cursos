import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'eadfly',
  synchronize: true,
  ssl: false,
  logging: false,
  entities: [__dirname + '/src/**/*.{js,ts}'],
  subscribers: [],
  migrations: ['./src/migrations/*.ts'],
});

AppDataSource.initialize();

export default AppDataSource;
