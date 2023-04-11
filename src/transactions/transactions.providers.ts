import { Transactions } from "src/entities/transactions.entity";
import { DataSource } from "typeorm";

export const transactionsProviders = [
    {
        provide: 'TRANSACTIONS_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Transactions),
        inject: ['DATA_SOURCE']
    }
]