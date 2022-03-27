import { JwtGuard } from './../account/guards/jwt.guard';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { DeliverymanService } from './deliveryman.service';
import { CreateDeliverymanDto } from './dto';
import { GetUser } from 'src/account/decorator';


@Controller('deliveryman')
export class DeliverymanController {
    constructor(private deliverymanService: DeliverymanService){}
    
    @Post()
    create(@Body() {username,password}:CreateDeliverymanDto){
        return this.deliverymanService.create({username,password})
    }

    @UseGuards(JwtGuard)
    @Get('deliveries')
    findDeliveries(@GetUser('id') id_deliveryman: string){
        return this.deliverymanService.findDeliveries(id_deliveryman);
    }
}
