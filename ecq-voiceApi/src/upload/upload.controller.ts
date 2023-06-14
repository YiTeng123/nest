import { Controller, Get, Post, Body, Patch, Param, Delete,UseInterceptors,UploadedFile, Query } from '@nestjs/common';
import { UploadService } from './upload.service';
import {FileInterceptor,FilesInterceptor} from '@nestjs/platform-express'

import {CreateUploadDto} from './dto/create-upload.dto'
import { map } from 'rxjs';

type Res = {
  return_code:string,
  return_info:string,
  result:{emotion:string[]},
  emotion_syn:{positive:number,negative:number}
}

// 面向切面的编程思想
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  async upload (@UploadedFile() file:any) {
   return await this.uploadService.axiosTest(file.path,file.filename)
    
 
  }


  @Post('test')
  async test (@Body() body:{_id:string,url:string}){
    console.log(body);
    
    await this.uploadService.addMp4Url(body._id,body.url)
  }

  @Post('uploadAudio')
  @UseInterceptors(FileInterceptor('file'))
  async  uploadAudio(@UploadedFile() file:any) {
    console.log(file)


     return  this.uploadService.uploadAudio(file.path)
  }

 

 
}


