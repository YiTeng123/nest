import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    // tslint:disable-next-line
    // return {username, password};
    console.log(username,password);
    
    const user = await this.authService.validateUser(username, password);
    console.log(user  ,'user?');
    
    if (!user) {
      throw new HttpException(
        { message: '账号或密码错误', error: 'please try again later.' },
        HttpStatus.BAD_REQUEST);
    }
    return user;
  }
}
