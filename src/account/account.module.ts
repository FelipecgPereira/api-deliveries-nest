
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { JwtStrategy } from './strategy';

@Module({
  imports:[JwtModule.register({})],
  controllers: [AccountController],
  providers: [AccountService,JwtStrategy]
})
export class AccountModule {}
