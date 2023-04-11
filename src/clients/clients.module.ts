import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { clientProviders } from './clients.providers';
import { DatabaseModule } from 'src/database/database.module';
import { accountProviders } from 'src/accounts/accounts.provider';
import { AccountsService } from 'src/accounts/accounts.service';

@Module({
  providers: [
    ... clientProviders,
    ... accountProviders ,
     ClientsService, 
     AccountsService
  ],
  controllers: [ClientsController],
  imports: [DatabaseModule]
})
export class ClientsModule {}
