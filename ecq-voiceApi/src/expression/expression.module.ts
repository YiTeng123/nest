import { Module } from '@nestjs/common';
import { ExpressionService } from './expression.service';
import { ExpressionController } from './expression.controller';
import { MulterModule } from '@nestjs/platform-express'
import {diskStorage} from 'multer'
import { extname,join } from 'path';

import {HttpModule } from '@nestjs/axios'

import { MongooseModule } from '@nestjs/mongoose';
import { Point, PointSchema } from 'src/user/entities/point.entity';
@Module({
  imports: 
  [
  MulterModule.register({
   // 这个方法用于控制上传完之后，文件存在的位置
     storage:diskStorage({
      // 配置地址
        destination:"/mnt/disk2/webapps/UploadFile/health2020",
        filename:(_,file,callback) => {
         // 用于截取图片和视频的后缀名，jpg，png
           const fileName = file.originalname
           return callback(null,fileName)
        }
     })
  }),
  HttpModule,MongooseModule.forFeature([
    { name: Point.name, schema: PointSchema, collection: 'point' }
]),
],
  controllers: [ExpressionController],
  providers: [ExpressionService]
})
export class ExpressionModule {}
