import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/account/decorator';
import { JwtGuard } from 'src/account/guards';
import {ClientService} from './client.service';
import { CreateClientDto } from './dto';

@Controller('client')
export class ClientController {
    constructor(private clientService: ClientService){}

    @Post()
    create(@Body() {username,password}:CreateClientDto){
        return this.clientService.create({username,password})
    }
    
    @UseGuards(JwtGuard)
    @Get('deliveries')
    findDeliveries(@GetUser('id') id_client: string){
        return this.clientService.findDeliveries(id_client);
    }

}
