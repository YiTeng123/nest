import { Injectable } from '@nestjs/common';
import { CreateUploadGameDto } from './dto/create-upload-game.dto';
import { UpdateUploadGameDto } from './dto/update-upload-game.dto';
import {UpdateUserDto} from 'src/user/dto/update-user.dto'
import { InjectModel } from '@nestjs/mongoose';
import { Point } from 'src/user/entities/point.entity';
import { Model } from 'mongoose';


@Injectable()
export class UploadGamesService {
  constructor(
    @InjectModel(Point.name) private pointTest: Model<Point>,
  ){}
  // 追加眼动路径
   async setEyePath(id:string,eyePath:string ){
    return await this.pointTest.findByIdAndUpdate(id,{$set:{eyePath}},{new:true});
   }


   async setEyeObject(id:string,eyeObject:Record<'realGame'|'vitualGame'|'clcAdvice' ,Array<any>> ){
    return await this.pointTest.findByIdAndUpdate(id,{$set:{eyeObject}},{new:true});
    
   }




  create(createUploadGameDto: CreateUploadGameDto) {
    return 'This action adds a new uploadGame';
  }

  findAll() {
    return `This action returns all uploadGames`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uploadGame`;
  }

  update(id: number, updateUploadGameDto: UpdateUploadGameDto) {
    return `This action updates a #${id} uploadGame`;
  }

  remove(id: number) {
    return `This action removes a #${id} uploadGame`;
  }
}
