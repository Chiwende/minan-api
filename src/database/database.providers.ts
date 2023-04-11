import { Accounts } from "src/entities/accounts.entity";
import { Clients } from "src/entities/clients.entity";
import { Transactions } from "src/entities/transactions.entity";
import { DataSource } from "typeorm";

export const databaseProviders = [  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '159.89.88.125',
        port: 3306,
        username: 'ghost',
        password: 'GH0$7123',
        database: 'minan_solutions',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
            Clients,
            Accounts,
            Transactions
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },]