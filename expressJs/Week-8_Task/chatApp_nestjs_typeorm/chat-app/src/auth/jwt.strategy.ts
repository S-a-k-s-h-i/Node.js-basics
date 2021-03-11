
import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from './constants';

var cookieExtractor = function(req) {
      var token;
      if (req && req.cookies){
        token = req.cookies['jwt'];
        
      } 
      console.log('token',token);
      if(!token){
        throw new UnauthorizedException();
        } 
      return token;
  };

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
      super({
          jwtFromRequest:cookieExtractor ,
          ignoreExpiration: false,
          secretOrKey: jwtConstants.secret,
      });
  }
  

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}