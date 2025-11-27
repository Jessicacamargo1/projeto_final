import { DataSource } from "typeorm";

export default new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'projeto_final',
    entities: [],
    migrations: ['dist/migrations/*.js'],
  });