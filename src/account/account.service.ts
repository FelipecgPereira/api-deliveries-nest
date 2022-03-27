import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as argon from 'argon2';

@Injectable()
export class AccountService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
        ){}
  

    async sigInClient({username,password}:AuthDto){
        const user = await this.prisma.clients.findUnique({
            where:{
                username: username
            }
        });

        if (!user)
            throw new ForbiddenException(
                'Credentials incorrect',
            );

        // compare password
         const pwMatches = await argon.verify(
            user.password,
            password,
       ); 

        // if password incorrect throw exception
        if (!pwMatches)
        throw new ForbiddenException(
        'Credentials incorrect',
      );

      return this.signToken(user.id, user.username);
       

    }

    async sigInDeliveryman({username,password}:AuthDto){
        const user = await this.prisma.deliveryman.findUnique({
            where:{
                username: username
            }
        });

        if (!user)
            throw new ForbiddenException(
                'Credentials incorrect',
            );

        // compare password
         const pwMatches = await argon.verify(
            user.password,
            password,
       ); 

        // if password incorrect throw exception
        if (!pwMatches)
        throw new ForbiddenException(
        'Credentials incorrect',
      );

      return this.signToken(user.id, user.username);
       

    }
   
    async signToken(userId: string, username: string): Promise<{access_token: string}> {
        const payload = {
          sub: userId,
          username
        }
        const secret = this.config.get('JWT_SECRET');
        
        const token = await this.jwt.signAsync(
          payload,
          {
            expiresIn: '1d',
            secret: secret,
          },
        );
    
        return {
          access_token: token,
        };
      }
}
