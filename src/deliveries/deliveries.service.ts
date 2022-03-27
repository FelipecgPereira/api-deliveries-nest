import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDeliveryDto, UpdateDeliveryDto } from './dto';

@Injectable()
export class DeliveriesService {
    constructor(
        private prisma: PrismaService,
    ){}
        

    async create({item_name,id_client}:CreateDeliveryDto){
        
        const delivery = await this.prisma.deliveries.create({
            data:{
                item_name,
                id_client
            }
        })
        return delivery;
    }

    async findAllAvailable(){
        const deliveries= await this.prisma.deliveries.findMany({
            where:{
                end_at: null,
                id_deliveryman:null
            }
        })
        return deliveries;
    }

    async updateDeliveryman({id_delivery, id_deliveryman}:UpdateDeliveryDto){
        const result= await this.prisma.deliveries.update({
            where:{
                id: id_delivery
            },
            data:{
                id_deliveryman
            }
        })
        return result;
    }

   async updateEndDate({id_delivery, id_deliveryman}:UpdateDeliveryDto){
        const result= await this.prisma.deliveries.updateMany({
            where:{
                id: id_delivery,
                id_deliveryman
            },
            data:{
                end_at: new Date(),
            }
        })
        return result;
    }
}
