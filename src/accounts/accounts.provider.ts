import { Accounts } from "src/entities/accounts.entity";
import { DataSource } from "typeorm";

export const accountProviders = [
    {
        provide: 'ACCOUNT_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Accounts),
        inject: ['DATA_SOURCE']
    }
]