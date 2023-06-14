import { Module } from '@nestjs/common';
import { VoiceService } from './voice.service';
import { VoiceController } from './voice.controller';
import { MulterModule } from '@nestjs/platform-express'
import {diskStorage} from 'multer'
import { extname,join } from 'path';
@Module({
  imports: 
  [
  MulterModule.register({
   // 这个方法用于控制上传完之后，文件存在的位置
     storage:diskStorage({
      // 配置地址
      destination:'/mnt/disk2/webapps/UploadFile/health-audio',
        filename:(_,file,callback) => {
         // 用于截取图片和视频的后缀名，jpg，png

        //  console.log( `${file.originalname }`)
        //  console.log(`${new Date().getTime() + extname(file.originalname)}`);
         
          //  const fileName = `${new Date().getTime() + extname(file.originalname)}`

          console.log(file.originalname.split('.'));
          // pos = name.lastIndexOf('/') 
           const fileName = file.originalname
          //  const fileName = `${new Date().getTime() }`
           return callback(null,fileName)
        }
     })
  })
 
],
  controllers: [VoiceController],
  providers: [VoiceService]
})
export class VoiceModule {}
