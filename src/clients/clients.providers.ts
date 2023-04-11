import { Clients } from "src/entities/clients.entity";
import { DataSource } from "typeorm";

export const clientProviders = [
    {
        provide: 'CLIENT_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Clients),
        inject: ['DATA_SOURCE']
    }
]