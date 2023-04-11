import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
    constructor (
        private transactionService: TransactionsService
    ) {}

    @Post()
    recordTransaction (@Body() payload: any) {
        return this.transactionService.recordTransaction(payload)
    }

    @Get()
    getAllTransactions() {
        return this.transactionService.getAllTransactions()
    }

    @Get('type/:type')
    getTransactionsByType (@Param(':type') transactionType: number) {
        return this.transactionService.getTransactionByType(transactionType)
    }

    @Get('client/:clientId')
    getTransactionsByClient(@Param(':clientId') clientId: number) {
        return this.transactionService.getTransactionsByClient(clientId)
    }

    @Get('accountId/:accountId')
    getTransactionByAccountId(@Param("accountId") accountId: number) {
        return this.transactionService.getTransactionsByAccountId(accountId)
    }
}
