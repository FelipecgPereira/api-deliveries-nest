import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { CreateDeliverymanDto } from './dto';

@Injectable()
export class DeliverymanService {

    constructor(
        private prisma: PrismaService,
    ){}

    async create({username,password}:CreateDeliverymanDto){
        const hashPassword = await argon.hash(password);
        try {
        const client =  await this.prisma.deliveryman.create({
             data:{
                 username,
                password: hashPassword
             }
         });
         
         delete client.password;

         return client;
        } catch (error) {
            if (
                error instanceof
                PrismaClientKnownRequestError
              ) {
                if (error.code === 'P2002') {
                  throw new ForbiddenException(
                    'Credentials taken',
                  );
                }
              }
              throw error;
            }
    }
      
    async findDeliveries(id_deliveryman: string) {
      const deliveries =  await this.prisma.deliveryman.findMany({
        where:{
            id:id_deliveryman
        },
        select:{
            id:true,
            username:true,
            Deliveries:true
        }
    });

    return deliveries;
  }
}
