import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddClientDto } from 'src/dtos/addClient.dto';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
    constructor (
        private clientService: ClientsService
    ) {}

    @Post()
    addClient(@Body() payload: AddClientDto){
        console.log("payload received", payload)
        return this.clientService.addClient(payload)
    }

    @Get()
    getAllClients () {
        return this.clientService.findAll()
    }
}
