import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { transactionsProviders } from './transactions.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [
    ... transactionsProviders,
    TransactionsService, 
  ],
  controllers: [TransactionsController],
  imports: [DatabaseModule]
})
export class TransactionsModule {}
