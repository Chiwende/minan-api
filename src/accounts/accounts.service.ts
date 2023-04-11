import { Inject, Injectable } from '@nestjs/common';
import { AddClientDto } from 'src/dtos/addClient.dto';
import { Accounts } from 'src/entities/accounts.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService {
    	constructor (
            @Inject('ACCOUNT_REPOSITORY')
            private accountRepository: Repository<Accounts>
        ) {}

      async createAccount(payload: Accounts): Promise<Accounts> {
        return await this.accountRepository.save(payload)
      }
}
