import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { DatabaseModule } from 'src/database/database.module';
import { accountProviders } from './accounts.provider';

@Module({
  providers: [AccountsService, ... accountProviders],
  controllers: [AccountsController],
  imports: [DatabaseModule]
})
export class AccountsModule {}
