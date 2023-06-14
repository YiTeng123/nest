import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// import { User, UserDocument } from 'src/blog/schemas/blog.schemas';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { Point, PointDocument } from './entities/point.entity'

import { CreatePointDto, createPerson } from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto'
import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import * as fs from 'fs'
@Injectable()
export class UserService {
  // 注册Schema后，可以使用 @InjectModel() 装饰器将 User 模型注入到 UserService 中:
  // 这里的'Users'需要和user.module定义的数据库表名对上
  constructor(
    @InjectModel(User.name) private userTest: Model<UserDocument>,
    @InjectModel(Point.name) private pointTest: Model<Point>,
    private readonly authService: AuthService
  ) { }

  // 查找全部的得分表1
  async getPoint(token: string, parmas: null | string): Promise<any> {
    const tokenRes = await this.authService.verifyToken(token)
    const Adminres = (await this.authService.findAdmin(tokenRes.username)).toObject()
    if (!!parmas === false) {
      // 查询全部 根据参数判断1 
      return (await this.pointTest.find({}).populate('personID')).filter(item =>
        {
         return  (item.toObject().personID as User)?.organ == Adminres.organ
        }
      )
    }
    else {
      return await this.pointTest.find({ personID: parmas }).populate('personID').exec()
    }
  }

  // 名字和编号联合查询
	async findUserByNameAndIdentifier(findQuery : { identifier : string, name : string }) {
		const { identifier, name } = findQuery
		let andArray
		if (identifier !== '' && name !== '') {
			andArray = [{ identifier }, { name }]
		}
		else if (identifier === '') andArray = [{ name }]
		else if (name === '') andArray = [{ identifier }]
		const userRes = this.userTest.find({ $and: andArray })
		return userRes
	}





  // 查找得分表
  async getPointonly(personID: string): Promise<any> {
    const temp = await this.pointTest.find({ _id: personID }).populate('personID').exec();
    return temp;
  }

  // 添加得分表
  async create(createUserDto: CreatePointDto): Promise<Point> {
    const createUser = new this.pointTest(createUserDto);
    const temp = await createUser.save();
    return temp;
  }

//添加用户
async addPerson(createPerson : createPerson) {
  const createUser = new this.userTest(createPerson);
  const temp = await createUser.save();
  return temp;
}

  // 通过名字查找用户
  async findname(name: string) {
    const data = await this.userTest.find({
      name: name
    })
    return data
  }
  // 查找所有用户
  async findAll(): Promise<User[]> {
    // 这里是异步的
    const temp = await this.userTest.find().exec();
    return temp;
  }

  // 查找
  async findOne(personID: string): Promise<User[]> {
    // 这里是异步的
    const temp = await this.userTest.find({ _id: personID },).exec();
    return temp;
  }
  // 删除
  async delete(sid: number) {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.userTest.deleteOne({ _id: sid });
    return temp;
  }
  //  修改
  // async updateUser(sid: string, data: any) {
  //    这里是异步的  
  //   const temp = await this.userTest.updateOne({ _id: sid }, { $set: data });
  //   return temp;
  // }
  // 根据_id来修改
  async updateUser(sid: string,upData:UpdateUserDto){
      const updated = await this.userTest.findByIdAndUpdate(sid,upData, { new: true })
      return updated
  }

  // 保存脑电数据并把名字保存至数据库
  async saveEeg(eggparam: Egginstance): Promise<unknown> {
    const { _id, txtName } = eggparam
    const readyWrite = JSON.stringify(eggparam)
    const eegAsyc = new Promise((resolve, reject) => {
      fs.writeFile(`/mnt/disk2/webapps/UploadFile/health-egg/${txtName}`, readyWrite, 'utf8', (err) => {
        // 如果文件写入成功，则err的值为null
        // 如果文件写入失败，则err的值是一个错误对象
        // console.log(readyWrite);
        if (err) {
          console.log(`写入文件失败,${err.message}`);
          return reject(`写入文件失败,${err.message}`)
        }
        return resolve('写入文件成功')
      })
    })
    // 将文件路径保存至数据库
    eegAsyc.then(async () => {
      // upsert:true意味着如果没有找到匹配的记录，则将插入一个新记录（即插入一个新的点）。
      await this.pointTest.findByIdAndUpdate({ _id }, { $set: { "txtName": txtName } }, { upsert: true })
    })
    return eegAsyc
  }

  async saveEegOne(eegparam: Eegoneinstance): Promise<unknown> {
    const { txtName } = eegparam
    const readyWrite = JSON.stringify(eegparam)
    const eegAsyc = new Promise((resolve, reject) => {
      fs.writeFile(`/mnt/disk2/webapps/UploadFile/health-egg/${txtName}`, readyWrite, 'utf8', (err) => {
        // 如果文件写入成功，则err的值为null
        // 如果文件写入失败，则err的值是一个错误对象
        // console.log(readyWrite);
        if (err) {
          console.log(`写入文件失败,${err.message}`);
          return reject(`写入文件失败,${err.message}`)
        }
        return resolve({ writeStatus: '写入文件成功', eegfile: `/mnt/disk2/webapps/UploadFile/health-egg/${txtName}` })
      })
    })
    return eegAsyc
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