import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { DeliverymanModule } from './deliveryman/deliveryman.module';
import { AccountModule } from './account/account.module';
import { DeliveriesModule } from './deliveries/deliveries.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
  }),PrismaModule, ClientModule, DeliverymanModule, AccountModule, DeliveriesModule],
 
})
export class AppModule {}
