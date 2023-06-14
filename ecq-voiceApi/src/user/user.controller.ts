/* user.controller.ts */
// 引入 Nest.js 内置的各个功能
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards ,Headers} from '@nestjs/common';
// 引入用户服务
import { UserService } from './user.service';
// 引入创建用户 DTO 用于限制从接口处传来的参数
import { CreatePointDto, createPerson } from './dto/create-user.dto';
// 引入文件读写模块来写入数据
import * as fs from 'fs'
import { log } from 'console';
import { ObjectId } from 'mongoose';
import { AuthGuard } from '@nestjs/passport';
// 配置局部路由
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // 查询得分表
  @UseGuards(AuthGuard('jwt'))
  @Get('getpoints')
  async getPoints(@Headers('Authorization') headerString: string,  @Query() query: null | { sid: string }) {
    const token = headerString.split(' ')[1]
    return await this.userService.getPoint(token,query.sid)

  }
  // 创建得分表
  @Post('createpoint')
  async createPoint(@Body() body: CreatePointDto) {
    //  throw new Error('Not implemented')
    return this.userService.create(body);
  }


// 添加用户
@Post('addUsers')
async addUsers(@Body() body: createPerson) {
  return this.userService.addPerson(body)
}

  // 根据名字查找用户
  @Get('findUserName')
  async findUserName(@Query() query: { name: string }) {
    return this.userService.findname(query.name)
  }

  //查找所有 user 路由
  @Get('findAll')
  async findAll() {
    return this.userService.findAll();
  }
  // 查找某一个用户路由
  @Get('findOne')
  async findOne( @Query() query: any) {
    // 从前端传来的参数中解出personID
    console.log(query.personID);
    return await this.userService.findOne(query.personID);
  }
  // 删除一个用户的路由
  @Delete(':sid')
  deleteUser(@Param() param: any) {
    return this.userService.delete(param.sid);
  }
  // 更改用户信息的路由
  @Put(':sid')
  updateUser(@Body() body: any, @Param() param: any) {
    return this.userService.updateUser(param.sid, body);

  }
  

  // 联合查询
  @Get('findAnd')
  async findAnd(@Query() query){
    return await this.userService.findUserByNameAndIdentifier(query)
  }




  // 拿到前台传来的大型脑电json
  @Post('eeg')
  eggsave(@Body() eggparam: Egginstance):Promise<unknown> {
    console.log(eggparam);
    return this.userService.saveEeg(eggparam)
  }

@Post('eegsave')
// 单独写入脑电的接口
eggsaveone(@Body() egg:Eegoneinstance){
  return this.userService.saveEegOne(egg)
}

}



type Egginstance = {
  eggparam: { 
    name: string
    channel1:Array<string>
    channel2:Array<string>
    channel3:Array<string>
    channel4:Array<string>
    inteervyal:string
  }[]
  _id:ObjectId
  txtName:string
}
type Eegoneinstance={
  eggparam: { 
    name: string
    channel1:Array<string>
    channel2:Array<string>
    channel3:Array<string>
    channel4:Array<string>
    inteervyal:string
  }[]
  txtName:string
}