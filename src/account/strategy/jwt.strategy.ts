import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  'jwt',
) {
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { sub: string; username: string;}) {
    let user;
     user =
      await this.prisma.clients.findUnique({
        where: {
          id: payload.sub,
        },
      });

      if(!user){
        user =
        await this.prisma.deliveryman.findUnique({
          where: {
            id: payload.sub,
          },
        });
      }

    delete user.password;
    return user;
  }
}