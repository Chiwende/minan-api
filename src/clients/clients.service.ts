import { Inject, Injectable } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';
import { AddClientDto } from 'src/dtos/addClient.dto';
import { Accounts } from 'src/entities/accounts.entity';
import { Clients } from 'src/entities/clients.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
    constructor (
        @Inject('CLIENT_REPOSITORY')
        private clientRepository: Repository<Clients>,
        private accountsService: AccountsService
    ) {}

    async findAll(): Promise<Clients[]> {
        return await this.clientRepository.find()
    }

    async findClient(clientId: number): Promise<Clients> {
        return await this.clientRepository.findOne({
            where: {
                id: clientId
            }
        })
    }

    async addClient(payload: AddClientDto): Promise<Clients> {
        console.log(payload)
        const clientDetails = await this.clientRepository.save(payload)
        const accountDetailsPayload: Accounts = {
            id: undefined,
            clientId: clientDetails.id,
            loanId: 0,
            accountBalance: '',
            interestRate: '',
            createdAt: undefined,
            updatedAt: undefined,
            status: 0
        }
        const accountDetails = await this.accountsService.createAccount(accountDetailsPayload)
        return clientDetails
    }
}
