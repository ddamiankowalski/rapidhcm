import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 't4jn3h4slo',
        database: 'rapidhcm',
        entities: [User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];