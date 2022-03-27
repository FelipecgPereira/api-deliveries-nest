import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class ClientService {

    constructor(
        private prisma: PrismaService,
    ){}
        
    async create({username,password}:CreateClientDto){
        const hashPassword = await argon.hash(password);
        try {
        const client =  await this.prisma.clients.create({
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

    async findDeliveries(id_client: string){
      
      const deliveries =  await this.prisma.clients.findMany({
        where:{
            id:id_client
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
