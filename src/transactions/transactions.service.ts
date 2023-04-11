import { Inject, Injectable } from '@nestjs/common';
import { Transactions } from 'src/entities/transactions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
    constructor (
        @Inject('TRANSACTIONS_REPOSITORY')
        private transactionRepository: Repository<Transactions>
    ) {}

    async recordTransaction(transactionData: any): Promise<Transactions> {
        return await this.transactionRepository.save(transactionData)
    }

    async getAllTransactions(): Promise<Transactions[]> {
        return await this.transactionRepository.find()
    }

    async getTransactionByType(type: number): Promise<Transactions[]> {
        return await this.transactionRepository.find({
            where: {
                type
            }
        })
    }

    async getTransactionsByClient(clientId: number): Promise<Transactions[]> {
        return await this.transactionRepository.find({
            where: {
                clientId
            }
        })
    }

    async getTransactionsByAccountId(accountId: number) : Promise<Transactions[]> {
        return await this.transactionRepository.find({
            where: {
                accountId
            }
        })
    }
}
