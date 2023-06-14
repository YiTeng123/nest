import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { json } from 'stream/consumers';
import { Auth, Authres } from './entities/auth.entity';
import { jwtConstants } from './constants';

@Injectable()
// 注册成为provider
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private AuthSchema: Model<Auth>,
    // private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async login(user:{$__:Object,$isNew:boolean,_doc:Authres}): Promise<any> {
    
    let userinfo = { ...user }
    const { _doc: userRes } = userinfo
    console.log(userRes)

    const payload = { username: userRes.username, sub: userRes.password };
    return {
      // 返回一个token
      access_token: this.jwtService.sign(payload),
      role:userRes.role,
      // name:userRes.name,
      expiresIn:jwtConstants.expiresIn,
      name:userRes.name,
    };
  }

// 验证账号密码正误
  async validateUser(
    username: string,
    password: string,
  ): Promise<null | Omit<Authres, 'password'>> {
    const existUser = await this.findAdmin(
      username
    );
    if (!existUser) {
      return null;
    }
    const validateExistser: Authres = JSON.parse(JSON.stringify(existUser))
    if (validateExistser.password !== password) {
      console.log('你输入的密码错了sb');
      return null
    }
    const { password: ignorePass, ...restUser } = existUser;
    return restUser;
  }

  // 通过账号查询数据库该管理员的信息
  async findAdmin(username: string) {
    // 这段代码不生效,我真是不理解,
    // const isExistArr = await this.AuthSchema.findOne({username}) 
    // console.log({username});
    // console.log(isExistArr,'isExistArr');

    const isExistArr = await this.AuthSchema.find({})
    const ExistArr = isExistArr.filter(item => item.toObject().username == username)
    return ExistArr.length > 0 ? ExistArr[0] : null
    // return isExistArr
  }

  async findall() {
    return this.AuthSchema.find({}).exec()
  }

  // 解析token
  async verifyToken(token: string): Promise<any> {
    const payload = await this.jwtService.verify(token);
    return payload;
  }
}
