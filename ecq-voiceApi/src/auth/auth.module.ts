import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
// import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthforFeature } from './entities/auth.entity';


@Module({
  imports: [
    MongooseModule.forFeature([AuthforFeature]),
    // UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      // signOptions: { expiresIn: '60s' },
      signOptions: { expiresIn: `${jwtConstants.expiresIn}s` },

    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService,JwtStrategy],
})
export class AuthModule {}
