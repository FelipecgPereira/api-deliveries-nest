import { JwtGuard } from './../account/guards/jwt.guard';
import { Controller, Post, UseGuards, Body,Param, Get } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { GetUser } from 'src/account/decorator';
import { CreateDeliveryDto, UpdateDeliveryDto } from './dto';

@Controller('delivery')
export class DeliveriesController {
    constructor(private deliveriesService: DeliveriesService){}

    @UseGuards(JwtGuard)
    @Post()
    create(@GetUser('id') id_client: string, @Body() {item_name}: CreateDeliveryDto){
        return this.deliveriesService.create({item_name,id_client});
    }

    @Get()
    findAllAvailable(){
        return this.deliveriesService.findAllAvailable();
    }

    @UseGuards(JwtGuard)
    @Post('updateDeliveryman/:id')
    updateDeliveryman(@GetUser('id') id_deliveryman: string, @Param('id') id_delivery:string){
        
        return this.deliveriesService.updateDeliveryman({id_delivery,id_deliveryman});
    }

    @UseGuards(JwtGuard)
    @Post('updateEndDate/:id')
    updateEndDate(@GetUser('id') id_deliveryman: string, @Param('id') id_delivery:string){
       return this.deliveriesService.updateEndDate({id_delivery,id_deliveryman});
    }
}
