/* user.controller.ts */
// 引入 Nest.js 内置的各个功能
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, Headers } from '@nestjs/common';
// 引入用户服务
import { TreeLike, UserApiService } from './userApi.service';
// 引入创建用户 DTO 用于限制从接口处传来的参数
import { CreatePointDto, Tree, createPerson } from './dto/create-user.dto';
// 引入文件读写模块来写入数据
import { ObjectId } from 'mongoose';
import { AuthGuard } from '@nestjs/passport';

import { AddUpdate } from './dto/update-user.dto'

// 配置局部路由
@Controller('userApi')
export class UserController {
  constructor(private readonly userService: UserApiService) { }


  // 查询得分表
  @UseGuards(AuthGuard('jwt'))
  @Get('getpoints')
  async getPoints(@Headers('Authorization') headerString: string, @Query() query: null | { sid: string }) {
    const token = headerString.split(' ')[1]
    console.log(token, 'token')
    return await this.userService.getPoint(token, query.sid)
  }

  //根据年级和班级确定某个班
  @UseGuards(AuthGuard('jwt'))
  @Get('getClassPoint')
  async getClassPoint(@Headers('Authorization') headerString: string, @Query() query: { className: string, gradeName: string }) {
    const token = headerString.split(' ')[1]
    return await this.userService.classPoint(token, query)
  }


  // 创建得分表
  @Post('createpoint')
  async createPoint(@Body() body: CreatePointDto) {
    return this.userService.create(body);
  }

  // 添加用户
  @Post('addUsers')
  async addUsers(@Body() body: createPerson) {
    return this.userService.addPerson(body)
  }
  // 向已有文档追加班级和年级
  @Post('addClassGrade')
  async addClassGradez(@Body() body: AddUpdate) {
    return this.userService.add(body)
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
  async findOne(@Query() query: any) {
    // 从前端传来的参数中解出personID
    return await this.userService.findOne(query.personID);
  }
  // 联合查询
  @Get('findAnd')
  async findAnd(@Query() query) {
    console.log('22')
    return await this.userService.findUserByNameAndIdentifier(query)
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



  // 拿到前台传来的大型脑电json
  @Post('eeg')
  eggsave(@Body() eggparam: Egginstance): Promise<unknown> {
    return this.userService.saveEeg(eggparam)
  }

  @Post('eegsave')
  // 单独写入脑电的接口
  eggsaveone(@Body() egg: Eegoneinstance) {
    return this.userService.saveEegOne(egg)
  }

  // 统计 同一班级/学校 信息1
  @Post('stats')
  stats(@Body() statsBody: StatsInstance) {
    let group = statsBody.group
    let type = statsBody.type
    let result = this.userService.stats(group, type)
    // console.log(result)
    return result
  }
    // 保存树
  @Post('tree')
  async save(@Body() tree:Tree) {
    console.log(tree,'tree')
    return await this.userService.saveTree(tree)
  }
  @Get(':sid')
  async getT(@Param() param) {
    return await this.userService.findTree(param.sid)
  }


}



type Egginstance = {
  eggparam: {
    name: string
    channel1: Array<string>
    channel2: Array<string>
    channel3: Array<string>
    channel4: Array<string>
    inteervyal: string
  }[]
  _id: ObjectId
  txtName: string
}
type Eegoneinstance = {
  eggparam: {
    name: string
    channel1: Array<string>
    channel2: Array<string>
    channel3: Array<string>
    channel4: Array<string>
    inteervyal: string
  }[]
  txtName: string
}
type GroupInstance = {
  person: {
    age: string
    grade: string
    identifier: string
    name: string
    nation: string
    organ: string
    schemeNum: string
    sex: string
    _id: string
    gradeApi: string
    classApi: string
  }
  presure: number
  gad7: number
  gait: number
  mood: number
  phq9: number
  tired: number
  totalGame: number
  totalPoint: number
  totalStroopGame: number
  totalcognitionGame: number
}
type StatsInstance = {
  group: GroupInstance[]
  type: String
}