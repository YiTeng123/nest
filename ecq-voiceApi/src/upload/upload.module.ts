import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';

import { MulterModule } from '@nestjs/platform-express'
import {diskStorage} from 'multer'
import { extname,join } from 'path';

import {HttpModule } from '@nestjs/axios'
import { MongooseModule } from '@nestjs/mongoose';
import { Point, PointSchema } from 'src/user/entities/point.entity';
@Module({
   // 依赖注入传输文件的模块
  imports: 
  [
  MulterModule.register({
   // 这个方法用于控制上传完之后，文件存在的位置
     storage:diskStorage({
      // 配置地址
        destination:'/mnt/disk2/webapps/UploadFile/health-pose',
        // destination:join(__dirname,"../viedo"),

        filename:(_,file,callback) => {
         // 用于截取图片和视频的后缀名，jpg，png
           const fileName =file.originalname
           return callback(null,fileName)
        }
     })
  }),
  HttpModule,MongooseModule.forFeature([
    { name: Point.name, schema: PointSchema, collection: 'point' }
]),
],
  controllers: [UploadController],
  providers: [UploadService],
  exports:[UploadService]
})
export class UploadModule { }