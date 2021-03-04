import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { User } from './entity/User.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret:jwtConstants.secret,
      signOptions:{expiresIn:'1d'},
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
